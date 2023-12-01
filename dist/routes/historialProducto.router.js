"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _historialProducto = require("../controllers/historialProducto.controller");
var router = (0, _express.Router)();
router.get("/hist/:id", _historialProducto.getHistorialProductoByIdInventory);
var _default = router;
exports["default"] = _default;