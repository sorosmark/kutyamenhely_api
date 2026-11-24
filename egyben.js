import express from "express";
const app = express();
const PORT = 3000;
const adatok = {
  kovetkezoId: 4,
  kutyak: [
    { id: 1, nev: "Bodri", fajta: "puli", kor: 3 },
    { id: 2, nev: "Morzsa", fajta: "vizsla", kor: 5 },
    { id: 3, nev: "Folti", fajta: "keverék", kor: 1 },
  ],
};
app.use(express.json());
app.get("/api/kutyak", (req, res) => {
  res.json(adatok.kutyak);
});
app.get("/api/kutyak/:id", (req, res) => {
  const id = Number(req.params.id);
  const kutya = adatok.kutyak.find((k) => k.id === id);
  if (!kutya) {
    return res.status(404).json({ hiba: "Nincs ilyen kutya." });
  }
  res.json(kutya);
});
app.post("/api/kutyak", (req, res) => {
  const { nev, fajta, kor } = req.body;
  if (!nev || !fajta) {
    return res.status(400).json({ hiba: "A nev és a fajta kötelező." });
  }
  const kutya = { id: adatok.kovetkezoId, nev, fajta, kor };
  adatok.kovetkezoId += 1;
  adatok.kutyak.push(kutya);
  res.status(201).json(kutya);
});
app.listen(PORT, (hiba) => {
  if (hiba) throw hiba;
  console.log(`A szerver fut: http://localhost:${PORT}`);
});
