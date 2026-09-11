/**
 * Slugify a string: "Hello World! 123" => "hello-world-123"
 */
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/--+/g, '-');

/**
 * Make a slug unique by appending a numeric suffix if needed.
 * @param {string} base - base slug
 * @param {Function} exists - (slug) => boolean  — checks if slug already exists
 * @param {string|null} excludeId - ID to exclude from uniqueness check (for updates)
 */
const uniqueSlug = (base, exists, excludeId = null) => {
  let slug = base;
  let counter = 1;
  while (exists(slug, excludeId)) {
    slug = `${base}-${counter++}`;
  }
  return slug;
};

/**
 * Standard API success response
 */
const success = (res, data = {}, message = 'Success', statusCode = 200) =>
  res.status(statusCode).json({ success: true, message, ...data });

/**
 * Standard API error response
 */
const error = (res, message = 'Something went wrong', statusCode = 500, details = null) =>
  res.status(statusCode).json({ success: false, message, ...(details && { details }) });

/**
 * Wrap async route handlers to catch errors
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = { slugify, uniqueSlug, success, error, asyncHandler };
