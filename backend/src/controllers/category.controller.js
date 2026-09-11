const prisma = require('../db/database');
const { slugify, success, error, asyncHandler } = require('../utils/helpers');

// Make slug unique asynchronously
async function uniqueSlugAsync(base, excludeId = null) {
  let slug = base;
  let i    = 1;
  while (true) {
    const found = await prisma.category.findUnique({ where: { slug } });
    if (!found || found.id === excludeId) break;
    slug = `${base}-${i++}`;
  }
  return slug;
}

/**
 * GET /api/categories
 * Returns each category with a count of its published blogs.
 */
const getCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    include: {
      _count: {
        select: { blogs: true },
      },
    },
  });

  const result = categories.map(({ _count, ...cat }) => ({
    ...cat,
    blogCount: _count.blogs,
  }));

  return success(res, { data: { categories: result } });
});

/**
 * POST /api/categories  — Admin only
 */
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) return error(res, 'name is required.', 400);

  const exists = await prisma.category.findUnique({ where: { name } });
  if (exists) return error(res, 'Category already exists.', 409);

  const slug     = await uniqueSlugAsync(slugify(name));
  const category = await prisma.category.create({ data: { name, slug } });

  return success(res, { data: { category } }, 'Category created.', 201);
});

/**
 * PATCH /api/categories/:id  — Admin only
 */
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) return error(res, 'name is required.', 400);

  const existing = await prisma.category.findUnique({ where: { id } });
  if (!existing) return error(res, 'Category not found.', 404);

  const slug     = await uniqueSlugAsync(slugify(name), id);
  const category = await prisma.category.update({ where: { id }, data: { name, slug } });

  return success(res, { data: { category } }, 'Category updated.');
});

/**
 * DELETE /api/categories/:id  — Admin only
 */
const deleteCategory = asyncHandler(async (req, res) => {
  const existing = await prisma.category.findUnique({ where: { id: req.params.id } });
  if (!existing) return error(res, 'Category not found.', 404);

  await prisma.category.delete({ where: { id: req.params.id } });
  return success(res, {}, 'Category deleted.');
});

module.exports = { getCategories, createCategory, updateCategory, deleteCategory };
