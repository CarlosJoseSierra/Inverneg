"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipoProducto = require("../controllers/tipoProducto.controller");
var router = (0, _express.Router)();
router.get("/tipoItem", _tipoProducto.getTipoProductos);
var _default = router;
exports["default"] = _default;