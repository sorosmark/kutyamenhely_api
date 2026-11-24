export function ervenyesKutya(req, res, next) {
  const { nev, fajta } = req.body;
  if (!nev || !fajta) {
    return res.status(400).json({ hiba: "A nev és a fajta kötelező." });
  }
  next();
}
