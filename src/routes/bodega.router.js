import { Router } from "express";
import {
    getBodegas,
    createNewBodega,
    updateBodegaById,
    getBodegaById,
} from "../controllers/bodega.controller";

const router = Router();

router.get("/bodega", getBodegas);
router.post("/bodega/new", createNewBodega);
router.put("/bodega/x/:id", updateBodegaById);
router.get("/bodega/:id", getBodegaById);

export default router;
