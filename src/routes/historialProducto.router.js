import { Router } from "express";
import {
    getHistorialProductoByIdInventory,
    updateHistorialByItem,
    getDiferenciaByItem,
  
} from "../controllers/historialProducto.controller";

const router = Router();

router.get("/hist/:id", getHistorialProductoByIdInventory);

router.put("/hist/x/:id", updateHistorialByItem);

router.get("/hist/y/:id", getDiferenciaByItem);

export default router;
