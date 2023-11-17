"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _bodega = require("../controllers/bodega.controller");
var router = (0, _express.Router)();
router.get("/bodega", _bodega.getBodegas);
router.post("/bodega/new", _bodega.createNewBodega);
router.put("/bodega/x/:id", _bodega.updateBodegaById);
router.get("/bodega/:id", _bodega.getBodegaById);
var _default = router;
exports["default"] = _default;