const prisma = require('../db/database');
const { slugify, uniqueSlug, success, error, asyncHandler } = require('../utils/helpers');
  
// ── helpers ──────────────────────────────────────────────────────────────────

const parseTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  try { return JSON.parse(tags); } catch { return []; }
};

const formatBlog = (blog) => blog ? { ...blog, tags: parseTags(blog.tags) } : null;

const blogInclude = {
  author:   { select: { id: true, name: true, email: true } },
  category: { select: { id: true, name: true, slug: true } },
};

// ── controllers ──────────────────────────────────────────────────────────────

/**
 * GET /api/blogs
 * Public. Supports: ?page, ?limit, ?status, ?category, ?tag, ?search, ?author
 */
const getBlogs = asyncHandler(async (req, res) => {
  const page     = Math.max(1, parseInt(req.query.page)  || 1);
  const limit    = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
  const skip     = (page - 1) * limit;
  const status   = req.query.status   || 'published';
  const category = req.query.category || undefined;
  const tag      = req.query.tag      || undefined;
  const search   = req.query.search   || undefined;
  const authorId = req.query.author   || undefined;

  // Non-authenticated users can only see published blogs
  const allowedStatus = req.user ? status : 'published';

  const where = {
    status: allowedStatus,
    ...(authorId  && { authorId }),
    ...(category  && { category: { slug: category } }),
    ...(search    && {
      OR: [
        { title:   { contains: search } },
        { excerpt: { contains: search } },
      ],
    }),
  };

  let [blogs, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      include: blogInclude,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.blog.count({ where }),
  ]);

  blogs = blogs.map(formatBlog);

  // Tag filter (tags stored as JSON string in SQLite)
  if (tag) {
    blogs = blogs.filter((b) => b.tags.includes(tag));
    total = blogs.length;
  }

  return success(res, {
    data: {
      blogs,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    },
  });
});

/**
 * GET /api/blogs/:slug
 * Public. Increments view count.
 */
const getBlog = asyncHandler(async (req, res) => {
  const blog = await prisma.blog.findUnique({
    where:   { slug: req.params.slug },
    include: blogInclude,
  });

  if (!blog) return error(res, 'Blog not found.', 404);

  // Draft/archived only visible to admin or author
  if (blog.status !== 'published') {
    if (!req.user || (req.user.role !== 'admin' && req.user.id !== blog.authorId)) {
      return error(res, 'Blog not found.', 404);
    }
  }

  // Increment view count (fire-and-forget)
  prisma.blog.update({ where: { id: blog.id }, data: { views: { increment: 1 } } }).catch(() => {});

  return success(res, { data: { blog: formatBlog({ ...blog, views: blog.views + 1 }) } });
});

/**
 * POST /api/blogs
 * Protected.
 */
const createBlog = asyncHandler(async (req, res) => {
  const { title, content, excerpt, coverImage, cover_image, status, categoryId, category_id, tags } = req.body;

  if (!title || !content) return error(res, 'title and content are required.', 400);

  const validStatuses = ['draft', 'published', 'archived'];
  const blogStatus = validStatuses.includes(status) ? status : 'draft';

  // Unique slug
  const baseSlug = slugify(title);
  const existingSlug = async (s) => !!(await prisma.blog.findUnique({ where: { slug: s } }));
  const slug = await uniqueSlugAsync(baseSlug, existingSlug);

  const tagsJson = JSON.stringify(Array.isArray(tags) ? tags : tags ? [tags] : []);
  const imgField = coverImage || cover_image || undefined;
  const catId    = categoryId || category_id || undefined;

  const blog = await prisma.blog.create({
    data: {
      title,
      slug,
      excerpt:     excerpt   || null,
      content,
      coverImage:  imgField  || null,
      status:      blogStatus,
      authorId:    req.user.id,
      categoryId:  catId     || null,
      tags:        tagsJson,
      publishedAt: blogStatus === 'published' ? new Date() : null,
    },
    include: blogInclude,
  });

  return success(res, { data: { blog: formatBlog(blog) } }, 'Blog created.', 201);
});

/**
 * PATCH /api/blogs/:slug
 * Protected. Author or Admin.
 */
const updateBlog = asyncHandler(async (req, res) => {
  const existing = await prisma.blog.findUnique({ where: { slug: req.params.slug } });
  if (!existing) return error(res, 'Blog not found.', 404);

  if (req.user.role !== 'admin' && req.user.id !== existing.authorId)
    return error(res, 'Forbidden.', 403);

  const { title, content, excerpt, coverImage, cover_image, status, categoryId, category_id, tags } = req.body;

  const validStatuses = ['draft', 'published', 'archived'];
  const newStatus = status && validStatuses.includes(status) ? status : existing.status;

  let newSlug = existing.slug;
  if (title && title !== existing.title) {
    const baseSlug    = slugify(title);
    const existingSlugFn = async (s) => {
      const found = await prisma.blog.findUnique({ where: { slug: s } });
      return !!(found && found.id !== existing.id);
    };
    newSlug = await uniqueSlugAsync(baseSlug, existingSlugFn);
  }

  const imgField = coverImage !== undefined ? coverImage : cover_image !== undefined ? cover_image : existing.coverImage;
  const catId    = categoryId !== undefined ? categoryId : category_id !== undefined ? category_id : existing.categoryId;

  const updated = await prisma.blog.update({
    where: { id: existing.id },
    data: {
      title:      title   || existing.title,
      slug:       newSlug,
      excerpt:    excerpt  !== undefined ? excerpt  : existing.excerpt,
      content:    content  || existing.content,
      coverImage: imgField || null,
      status:     newStatus,
      categoryId: catId    || null,
      tags:       tags !== undefined
        ? JSON.stringify(Array.isArray(tags) ? tags : [tags])
        : existing.tags,
      publishedAt: newStatus === 'published' && !existing.publishedAt
        ? new Date()
        : existing.publishedAt,
    },
    include: blogInclude,
  });

  return success(res, { data: { blog: formatBlog(updated) } }, 'Blog updated.');
});

/**
 * DELETE /api/blogs/:slug
 * Protected. Author or Admin.
 */
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await prisma.blog.findUnique({ where: { slug: req.params.slug } });
  if (!blog) return error(res, 'Blog not found.', 404);

  if (req.user.role !== 'admin' && req.user.id !== blog.authorId)
    return error(res, 'Forbidden.', 403);

  await prisma.blog.delete({ where: { id: blog.id } });
  return success(res, {}, 'Blog deleted.');
});

// ── Comments ─────────────────────────────────────────────────────────────────

/**
 * GET /api/blogs/:slug/comments
 */
const getComments = asyncHandler(async (req, res) => {
  const blog = await prisma.blog.findFirst({
    where: { slug: req.params.slug, status: 'published' },
    select: { id: true },
  });
  if (!blog) return error(res, 'Blog not found.', 404);

  const comments = await prisma.comment.findMany({
    where:   { blogId: blog.id },
    include: { author: { select: { id: true, name: true } } },
    orderBy: { createdAt: 'asc' },
  });

  return success(res, { data: { comments } });
});

/**
 * POST /api/blogs/:slug/comments
 */
const addComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content?.trim()) return error(res, 'Comment content is required.', 400);

  const blog = await prisma.blog.findFirst({
    where:  { slug: req.params.slug, status: 'published' },
    select: { id: true },
  });
  if (!blog) return error(res, 'Blog not found.', 404);

  const comment = await prisma.comment.create({
    data:    { content: content.trim(), blogId: blog.id, authorId: req.user.id },
    include: { author: { select: { id: true, name: true } } },
  });

  return success(res, { data: { comment } }, 'Comment added.', 201);
});

/**
 * DELETE /api/blogs/:slug/comments/:commentId
 */
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await prisma.comment.findUnique({
    where: { id: req.params.commentId },
  });
  if (!comment) return error(res, 'Comment not found.', 404);

  if (req.user.role !== 'admin' && req.user.id !== comment.authorId)
    return error(res, 'Forbidden.', 403);

  await prisma.comment.delete({ where: { id: comment.id } });
  return success(res, {}, 'Comment deleted.');
});

// ── Async slug helper ─────────────────────────────────────────────────────────
async function uniqueSlugAsync(base, existsFn) {
  let slug = base;
  let i    = 1;
  while (await existsFn(slug)) {
    slug = `${base}-${i++}`;
  }
  return slug;
}

module.exports = {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog,
  getComments, addComment, deleteComment,
};
