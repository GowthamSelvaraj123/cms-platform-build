const express = require('express');
const router  = express.Router();

const {
  getBlogs, getBlog, createBlog, updateBlog, deleteBlog,
  getComments, addComment, deleteComment,
} = require('../controllers/blog.controller');
const { authenticate } = require('../middleware/auth.middleware');

const optionalAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader?.startsWith('Bearer ')) {
    const jwt = require('jsonwebtoken');
    try {
      req.user = jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET);
    } catch { /* ignore */ }
  }
  next();
};

// ─────────────────────────────────────────────────────────────────────────────
// Blog CRUD
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: List blog posts
 *     description: >
 *       Returns a paginated list of blog posts. Public users only see `published` blogs.
 *       Authenticated users can request `draft` or `archived` blogs.
 *     tags: [Blogs]
 *     security:
 *       - BearerAuth: []
 *       - {}
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *           maximum: 100
 *         description: Items per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [draft, published, archived]
 *           default: published
 *         description: Filter by status (authenticated only for non-published)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category slug (e.g. `technology`)
 *       - in: query
 *         name: tag
 *         schema:
 *           type: string
 *         description: Filter by tag (e.g. `javascript`)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Full-text search on title and excerpt
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter by author ID
 *     responses:
 *       200:
 *         description: Paginated list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     blogs:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Blog'
 *                     pagination:
 *                       $ref: '#/components/schemas/Pagination'
 */
router.get('/', optionalAuth, getBlogs);

/**
 * @swagger
 * /blogs/{slug}:
 *   get:
 *     summary: Get a single blog post
 *     description: >
 *       Returns a single blog post by slug. **View count is incremented** on each request.
 *       Draft/archived blogs are only visible to the author or admin.
 *     tags: [Blogs]
 *     security:
 *       - BearerAuth: []
 *       - {}
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog slug (e.g. `my-first-post`)
 *         example: hello-prisma
 *     responses:
 *       200:
 *         description: Blog post details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     blog:
 *                       $ref: '#/components/schemas/Blog'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/:slug', optionalAuth, getBlog);

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog post
 *     description: Creates a new blog post. The authenticated user becomes the author.
 *     tags: [Blogs]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogInput'
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Blog created.
 *                 data:
 *                   type: object
 *                   properties:
 *                     blog:
 *                       $ref: '#/components/schemas/Blog'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */
router.post('/', authenticate, createBlog);

/**
 * @swagger
 * /blogs/{slug}:
 *   patch:
 *     summary: Update a blog post
 *     description: >
 *       Partially updates a blog post. Only the **author** or an **admin** can update.
 *       All fields are optional — only send what you want to change.
 *     tags: [Blogs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: hello-prisma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogUpdateInput'
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     blog:
 *                       $ref: '#/components/schemas/Blog'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.patch('/:slug', authenticate, updateBlog);

/**
 * @swagger
 * /blogs/{slug}:
 *   delete:
 *     summary: Delete a blog post
 *     description: Permanently deletes a blog post. Only the **author** or an **admin** can delete.
 *     tags: [Blogs]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: hello-prisma
 *     responses:
 *       200:
 *         description: Blog deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete('/:slug', authenticate, deleteBlog);

// ─────────────────────────────────────────────────────────────────────────────
// Comments
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /blogs/{slug}/comments:
 *   get:
 *     summary: List comments on a blog post
 *     description: Returns all comments for a published blog post, ordered oldest-first.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: hello-prisma
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     comments:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Comment'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.get('/:slug/comments', getComments);

/**
 * @swagger
 * /blogs/{slug}/comments:
 *   post:
 *     summary: Add a comment to a blog post
 *     description: Adds a comment to a published blog post. Requires authentication.
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: hello-prisma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentInput'
 *     responses:
 *       201:
 *         description: Comment added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     comment:
 *                       $ref: '#/components/schemas/Comment'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.post('/:slug/comments', authenticate, addComment);

/**
 * @swagger
 * /blogs/{slug}/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment
 *     description: Deletes a comment. Only the **comment author** or an **admin** can delete.
 *     tags: [Comments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: hello-prisma
 *       - in: path
 *         name: commentId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Comment deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */
router.delete('/:slug/comments/:commentId', authenticate, deleteComment);

module.exports = router;
