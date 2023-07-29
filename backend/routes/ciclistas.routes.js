import express from "express";
import { deleteCiclistas, getCiclistasAll, getCiclistasId, patchCiclistas, postCiclistas } from "../controllers/Ciclistas.controller.js";

const router = express.Router();

router.get("/all", getCiclistasAll);
router.post("/post", postCiclistas);
router.delete("/del/:id", deleteCiclistas);
router.patch("/upd/:id", patchCiclistas);
router.get("/get/:id", getCiclistasId);

export default router;