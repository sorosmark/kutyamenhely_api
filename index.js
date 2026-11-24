import express from "express";
import kutyaRouter from "./src/routes/kutya.routes.js";
import { naplozo } from "./src/middlewares/naplozo.js";
import { nemTalalhato } from "./src/middlewares/nem-talalhato.js";
const app = express();
const PORT = 3000;
app.use(naplozo);
app.use(express.json());
app.use("/api/kutyak", kutyaRouter);
app.use(nemTalalhato);
app.listen(PORT, (hiba) => {
  if (hiba) throw hiba;
  console.log(`A szerver fut: http://localhost:${PORT}`);
});
