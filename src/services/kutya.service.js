import { adatok } from "../adatok.js";
export function osszesKutya() {
  return adatok.kutyak;
}
export function kutyaAzonositoval(id) {
  return adatok.kutyak.find((k) => k.id === id);
}
export function ujKutya(nev, fajta, kor) {
  const kutya = { id: adatok.kovetkezoId, nev, fajta, kor };
  adatok.kovetkezoId += 1;
  adatok.kutyak.push(kutya);
  return kutya;
}
