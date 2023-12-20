import { Router } from "express";
import {
    getHistorialProductoByIdInventory,
    updateHistorialByItem,
    getDiferenciaByItem,
    getHistorialByItem,
  
} from "../controllers/historialProducto.controller";

const router = Router();

router.get("/hist/:id", getHistorialProductoByIdInventory);

router.put("/hist/x/:id", updateHistorialByItem);

router.get("/hist/y/:id", getDiferenciaByItem);

router.get("/hist/z/:id", getHistorialByItem);

export default router;
