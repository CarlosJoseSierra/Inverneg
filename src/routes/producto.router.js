import { Router } from "express";
import {
    getProductos,
    createNewProducto,
    updateProductoById,
    getProductoById,
    updateProductoBodegaById,
} from "../controllers/producto.controller";

const router = Router();

router.get("/item", getProductos);
router.post("/item/new", createNewProducto);
router.put("/item/x/:id", updateProductoById);
router.get("/item/:id", getProductoById);
router.put("/item/bod/:id", updateProductoBodegaById);

export default router;
