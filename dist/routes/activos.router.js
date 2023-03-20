"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _activos = require("../controllers/activos.controller");
var router = (0, _express.Router)();
router.get("/activos", _activos.getActivos);
router.get("/activos/y/:idUsuario", _activos.getActivosXUsuario);
router.post("/activos/new", _activos.createNewActivo);
router.get("/activos/count", _activos.getcountActivo);
router.get("/activos1/:EQC_codTag", _activos.getActivoByCodTag);
router.get("/activos/tipo", _activos.getTipoInventario);
router.put("/activos/x/:id", _activos.updateActivoById);
var _default = router;
exports["default"] = _default;