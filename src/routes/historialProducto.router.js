import { Router } from "express";
import {
    getHistorialProductoByIdInventory,
    updateHistorialByItem,
  
} from "../controllers/historialProducto.controller";

const router = Router();

router.get("/hist/:id", getHistorialProductoByIdInventory);

router.put("/hist/x/:id", updateHistorialByItem);

export default router;
