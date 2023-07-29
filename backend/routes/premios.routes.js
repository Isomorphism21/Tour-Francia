import express from "express";
import { deletePremios, getPremiosAll, getPremiosOne, postPremios, updPremios } from "../controllers/Premios.controller.js";

const router = express.Router();

router.get("/all", getPremiosAll);
router.post("/post", postPremios);
router.delete("/del/:id", deletePremios);
router.patch("/upd/:id", updPremios);
router.get("/get/:id", getPremiosOne);

export default router;