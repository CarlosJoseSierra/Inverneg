"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _inventario = require("../controllers/inventario.controller");
var router = (0, _express.Router)();
router.get("/inventario", _inventario.getInventory);
router.post("/inventario/new", _inventario.createNewInventory);
router.get("/inventario/:id", _inventario.getInventoryById);
router.get("/inventario/x", _inventario.getInventoryActive);
var _default = router;
exports["default"] = _default;