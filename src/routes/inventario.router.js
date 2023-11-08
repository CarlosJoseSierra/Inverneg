import { Router } from "express";
import {
  getInventory,
  createNewInventory,
  getInventoryById,
  getInventoryActive,
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventory);

router.get("/inventario/x", getInventoryActive);

router.post("/inventario/new", createNewInventory);

router.get("/inventario/:id", getInventoryById);

export default router;
