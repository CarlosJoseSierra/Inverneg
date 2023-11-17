import { Router } from "express";
import {
    getSucursales,
    createNewSucursal,
    updateSucursalById,
    getSucursalById,
} from "../controllers/sucursal.controller";

const router = Router();

router.get("/sucursal", getSucursales);
router.post("/sucursal/new", createNewSucursal);
router.put("/sucursal/x/:id", updateSucursalById);
router.get("/sucursal/:id", getSucursalById);

export default router;
