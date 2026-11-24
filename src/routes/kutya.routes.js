import express from "express";
import * as vezerlo from "../controllers/kutya.controller.js";
import { ervenyesKutya } from "../middlewares/ervenyes.js";
const router = express.Router();
router.get("/", vezerlo.listaz);
router.get("/:id", vezerlo.egy);
router.post("/", ervenyesKutya, vezerlo.letrehoz);
export default router;
