import { Router } from "express";
import {
  getInventory,
  createNewInventory,
  getInventoryById,
  getInventoryActive,
  EndInventoryById,
} from "../controllers/inventario.controller";

const router = Router();

router.get("/inventario", getInventory);

router.get("/inventario/x", getInventoryActive);

router.post("/inventario/new", createNewInventory);

router.get("/inventario/:id", getInventoryById);

router.get("/inventario/y/:id", EndInventoryById);

export default router;
