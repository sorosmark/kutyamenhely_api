import * as szolgaltatas from "../services/kutya.service.js";
export function listaz(req, res) {
  res.json(szolgaltatas.osszesKutya());
}
export function egy(req, res) {
  const id = Number(req.params.id);
  const kutya = szolgaltatas.kutyaAzonositoval(id);
  if (!kutya) {
    return res.status(404).json({ hiba: "Nincs ilyen kutya." });
  }
  res.json(kutya);
}
export function letrehoz(req, res) {
  const { nev, fajta, kor } = req.body;
  const kutya = szolgaltatas.ujKutya(nev, fajta, kor);
  res.status(201).json(kutya);
}
