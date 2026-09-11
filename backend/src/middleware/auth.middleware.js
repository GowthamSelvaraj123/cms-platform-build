const jwt = require('jsonwebtoken');

/**
 * Middleware: verify JWT and attach user to req.user
 */
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Access token required.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

/**
 * Middleware: restrict to admin role
 */
const requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Admin access required.' });
  }
  next();
};

/**
 * Middleware: restrict to admin OR the resource owner
 * @param {Function} getOwnerId - function(req) => ownerId string
 */
const requireOwnerOrAdmin = (getOwnerId) => (req, res, next) => {
  if (req.user?.role === 'admin') return next();
  const ownerId = getOwnerId(req);
  if (req.user?.id === ownerId) return next();
  return res.status(403).json({ success: false, message: 'Forbidden.' });
};

module.exports = { authenticate, requireAdmin, requireOwnerOrAdmin };
