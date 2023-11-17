"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _sucursal = require("../controllers/sucursal.controller");
var router = (0, _express.Router)();
router.get("/sucursal", _sucursal.getSucursales);
router.post("/sucursal/new", _sucursal.createNewSucursal);
router.put("/sucursal/x/:id", _sucursal.updateSucursalById);
router.get("/sucursal/:id", _sucursal.getSucursalById);
var _default = router;
exports["default"] = _default;