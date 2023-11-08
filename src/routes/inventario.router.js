import { Router } from "express";
import {
  getInventory,
  createNewInventory,
  getInventoryById,
  getInventoryActive
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventory);

router.post("/inventario/new", createNewInventory);

router.get("/inventario/:id", getInventoryById);

router.get("/inventario/x", getInventoryActive);

export default router;
