export function naplozo(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}
