import express from "express";
import { deleteEtapas, getEtapasOne, obtenerEtapas, patchEtapas, postEtapas } from "../controllers/Etapas.controller.js";

const router = express.Router();

router.get("/all", obtenerEtapas);
router.post("/post", postEtapas);
router.delete("/del/:id", deleteEtapas);
router.patch("/upd/:id", patchEtapas);
router.get("/get/:id", getEtapasOne);

export default router;