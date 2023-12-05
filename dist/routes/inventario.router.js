"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _inventario = require("../controllers/inventario.controller");
var router = (0, _express.Router)();
router.get("/inventario", _inventario.getInventory);
router.get("/inventario/x", _inventario.getInventoryActive);
router.post("/inventario/new", _inventario.createNewInventory);
router.get("/inventario/:id", _inventario.getInventoryById);
router.put("/inventario/y/:id", _inventario.EndInventoryById);
var _default = router;
exports["default"] = _default;