import express from "express";
import { deleteEquipos, getEquiposOne, obtenerEquipos, patchEquipos, postEquipos } from "../controllers/Equipos.controller.js";

const router = express.Router();

router.get("/all", obtenerEquipos);
router.post("/post", postEquipos);
router.delete("/del/:id", deleteEquipos);
router.patch("/upd/:id", patchEquipos);
router.get("/get/:id", getEquiposOne);

export default router;