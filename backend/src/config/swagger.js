const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '📝 CMS Blog API',
      version: '1.0.0',
      description: `
A full-featured Content Management System REST API built with **Express**, **Prisma ORM**, and **SQLite**.

## Features
- 🔐 JWT Authentication (Register / Login)
- 📝 Blog CRUD with slug auto-generation, view counter, draft/publish/archive
- 🏷️ Categories with blog count
- 💬 Nested Comments
- 🔑 Role-based access (Admin / User)

## Authentication
Include your JWT token in the **Authorization** header:
\`\`\`
Authorization: Bearer <your_token>
\`\`\`
The **first registered user** is automatically promoted to **admin**.
      `.trim(),
      contact: {
        name: 'CMS API Support',
      },
      license: {
        name: 'ISC',
      },
    },
    servers: [
      {
        url: 'http://localhost:{port}/api',
        description: 'Local Development Server',
        variables: {
          port: { default: '3000', description: 'Server port' },
        },
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter your JWT token obtained from /auth/login or /auth/register',
        },
      },
      schemas: {
        // ── Auth ──────────────────────────────────────────────
        RegisterInput: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name:     { type: 'string', example: 'Jane Doe' },
            email:    { type: 'string', format: 'email', example: 'jane@example.com' },
            password: { type: 'string', minLength: 6, example: 'secret123' },
          },
        },
        LoginInput: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email:    { type: 'string', format: 'email', example: 'jane@example.com' },
            password: { type: 'string', example: 'secret123' },
          },
        },
        User: {
          type: 'object',
          properties: {
            id:        { type: 'string', format: 'uuid' },
            name:      { type: 'string' },
            email:     { type: 'string', format: 'email' },
            role:      { type: 'string', enum: ['user', 'admin'] },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string' },
            data: {
              type: 'object',
              properties: {
                token: { type: 'string', description: 'JWT access token' },
                user:  { $ref: '#/components/schemas/User' },
              },
            },
          },
        },
        // ── Blog ──────────────────────────────────────────────
        BlogInput: {
          type: 'object',
          required: ['title', 'content'],
          properties: {
            title:      { type: 'string', example: 'My First Blog Post' },
            content:    { type: 'string', example: 'Full markdown content here...' },
            excerpt:    { type: 'string', example: 'A short summary of the post.' },
            coverImage: { type: 'string', format: 'uri', example: 'https://example.com/cover.jpg' },
            status:     { type: 'string', enum: ['draft', 'published', 'archived'], default: 'draft' },
            categoryId: { type: 'string', format: 'uuid', example: 'uuid-of-category' },
            tags:       { type: 'array', items: { type: 'string' }, example: ['javascript', 'tutorial'] },
          },
        },
        BlogUpdateInput: {
          type: 'object',
          properties: {
            title:      { type: 'string', example: 'Updated Title' },
            content:    { type: 'string' },
            excerpt:    { type: 'string' },
            coverImage: { type: 'string', format: 'uri' },
            status:     { type: 'string', enum: ['draft', 'published', 'archived'] },
            categoryId: { type: 'string', format: 'uuid' },
            tags:       { type: 'array', items: { type: 'string' } },
          },
        },
        Blog: {
          type: 'object',
          properties: {
            id:           { type: 'string', format: 'uuid' },
            title:        { type: 'string' },
            slug:         { type: 'string', example: 'my-first-blog-post' },
            excerpt:      { type: 'string', nullable: true },
            content:      { type: 'string' },
            coverImage:   { type: 'string', nullable: true },
            status:       { type: 'string', enum: ['draft', 'published', 'archived'] },
            views:        { type: 'integer', example: 42 },
            tags:         { type: 'array', items: { type: 'string' } },
            publishedAt:  { type: 'string', format: 'date-time', nullable: true },
            createdAt:    { type: 'string', format: 'date-time' },
            updatedAt:    { type: 'string', format: 'date-time' },
            author: {
              type: 'object',
              properties: {
                id:   { type: 'string', format: 'uuid' },
                name: { type: 'string' },
              },
            },
            category: {
              type: 'object',
              nullable: true,
              properties: {
                id:   { type: 'string', format: 'uuid' },
                name: { type: 'string' },
                slug: { type: 'string' },
              },
            },
          },
        },
        Pagination: {
          type: 'object',
          properties: {
            page:       { type: 'integer', example: 1 },
            limit:      { type: 'integer', example: 10 },
            total:      { type: 'integer', example: 100 },
            totalPages: { type: 'integer', example: 10 },
          },
        },
        // ── Category ──────────────────────────────────────────
        CategoryInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', example: 'Technology' },
          },
        },
        Category: {
          type: 'object',
          properties: {
            id:        { type: 'string', format: 'uuid' },
            name:      { type: 'string', example: 'Technology' },
            slug:      { type: 'string', example: 'technology' },
            createdAt: { type: 'string', format: 'date-time' },
            blogCount: { type: 'integer', example: 5 },
          },
        },
        // ── Comment ───────────────────────────────────────────
        CommentInput: {
          type: 'object',
          required: ['content'],
          properties: {
            content: { type: 'string', example: 'Great article!' },
          },
        },
        Comment: {
          type: 'object',
          properties: {
            id:        { type: 'string', format: 'uuid' },
            content:   { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            author: {
              type: 'object',
              properties: {
                id:   { type: 'string', format: 'uuid' },
                name: { type: 'string' },
              },
            },
          },
        },
        // ── Errors ────────────────────────────────────────────
        ErrorResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Something went wrong.' },
          },
        },
        SuccessResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: 'Success' },
          },
        },
      },
      responses: {
        Unauthorized: {
          description: 'Missing or invalid JWT token',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { success: false, message: 'Access token required.' },
            },
          },
        },
        Forbidden: {
          description: 'Insufficient permissions',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { success: false, message: 'Admin access required.' },
            },
          },
        },
        NotFound: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
              example: { success: false, message: 'Blog not found.' },
            },
          },
        },
        BadRequest: {
          description: 'Invalid request body or parameters',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ErrorResponse' },
            },
          },
        },
      },
    },
    tags: [
      { name: 'Health',     description: 'Server health check' },
      { name: 'Auth',       description: 'Authentication — register, login, profile' },
      { name: 'Blogs',      description: 'Blog post CRUD operations' },
      { name: 'Comments',   description: 'Comments on blog posts' },
      { name: 'Categories', description: 'Blog categories management' },
    ],
  },
  apis: [
    // swagger-jsdoc uses glob which requires forward slashes on Windows
    path.join(__dirname, '../routes/*.js').replace(/\\/g, '/'),
    path.join(__dirname, '../../app.js').replace(/\\/g, '/'),
  ],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
