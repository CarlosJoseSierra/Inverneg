"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _producto = require("../controllers/producto.controller");
var router = (0, _express.Router)();
router.get("/item", _producto.getProductos);
router.post("/item/new", _producto.createNewProducto);
router.put("/item/x/:id", _producto.updateProductoById);
router.get("/item/:id", _producto.getProductoById);
router.put("/item/bod/:id", _producto.updateProductoBodegaById);
var _default = router;
exports["default"] = _default;