import { Router } from "express";
import {
    getTipoProductos,
} from "../controllers/tipoProducto.controller";

const router = Router();

router.get("/tipoItem", getTipoProductos);

export default router;
