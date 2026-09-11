const prisma = require('../db/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { success, error, asyncHandler } = require('../utils/helpers');

/**
 * POST /api/auth/register
 */
const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password)
    return error(res, 'name, email and password are required.', 400);
  if (password.length < 6)
    return error(res, 'Password must be at least 6 characters.', 400);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return error(res, 'Email already registered.', 409);

  const hashed = await bcrypt.hash(password, 10);

  // First user becomes admin automatically
  const count = await prisma.user.count();
  const assignedRole = count === 0 ? 'admin' : (role === 'admin' ? 'user' : (role || 'user'));

  const user = await prisma.user.create({
    data: { name, email, password: hashed, role: assignedRole },
    select: { id: true, name: true, email: true, role: true },
  });

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  return success(res, { data: { token, user } }, 'Registered successfully.', 201);
});

/**
 * POST /api/auth/login
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return error(res, 'email and password are required.', 400);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return error(res, 'Invalid credentials.', 401);

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return error(res, 'Invalid credentials.', 401);

  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  return success(res, {
    data: {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    },
  }, 'Logged in successfully.');
});

/**
 * GET /api/auth/me
 */
const me = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });
  if (!user) return error(res, 'User not found.', 404);
  return success(res, { data: { user } });
});

module.exports = { register, login, me };
