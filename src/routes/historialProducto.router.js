import { Router } from "express";
import {
    getHistorialProductoByIdInventory,
  
} from "../controllers/historialProducto.controller";

const router = Router();

router.get("/hist/:id", getHistorialProductoByIdInventory);

export default router;
