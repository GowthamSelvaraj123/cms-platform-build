require('dotenv').config();
const express     = require('express');
const cors        = require('cors');
const swaggerUi   = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const prisma      = require('./src/db/database');

const authRoutes     = require('./src/routes/auth.routes');
const blogRoutes     = require('./src/routes/blog.routes');
const categoryRoutes = require('./src/routes/category.routes');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Swagger UI ───────────────────────────────────────────────────────────────
const swaggerUiOptions = {
  customSiteTitle: 'CMS Blog API Docs',
  customCss: `
    .topbar { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
    .topbar-wrapper img { content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'); height: 40px; }
    .swagger-ui .info .title { color: #0f3460; }
    .swagger-ui .scheme-container { background: #f8f9fa; padding: 16px; border-radius: 8px; }
  `,
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    tryItOutEnabled: true,
  },
};
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
app.get('/api/docs.json', (req, res) => res.json(swaggerSpec));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth',       authRoutes);
app.use('/api/blogs',      blogRoutes);
app.use('/api/categories', categoryRoutes);

// ── Health Check ──────────────────────────────────────────────────────────────
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns server status and current timestamp.
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is running
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
 *                   example: CMS API is running
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'CMS API is running', timestamp: new Date().toISOString() });
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.method} ${req.path} not found.` });
});

// ── Global Error Handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error.',
  });
});

app.listen(PORT, () => {
  console.log(`✅  CMS API running on http://localhost:${PORT}`);
  console.log(`   📚 Swagger UI:  http://localhost:${PORT}/api/docs`);
  console.log(`   📄 OpenAPI JSON: http://localhost:${PORT}/api/docs.json`);
  console.log(`   🩺 Health:       GET  http://localhost:${PORT}/api/health`);
  console.log(`   🔐 Auth:         POST http://localhost:${PORT}/api/auth/register`);
  console.log(`   📝 Blogs:        GET  http://localhost:${PORT}/api/blogs`);
  console.log(`   🏷️  Categories:   GET  http://localhost:${PORT}/api/categories`);
});

// ── Graceful Shutdown ─────────────────────────────────────────────────────────
const shutdown = async () => {
  await prisma.$disconnect();
  process.exit(0);
};
process.on('SIGINT',  shutdown);
process.on('SIGTERM', shutdown);

module.exports = app;
