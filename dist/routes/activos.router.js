"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _activos = require("../controllers/activos.controller");
var router = (0, _express.Router)();
router.get("/activos", _activos.getActivos);
router.get("/activos/x/:idUsuario", _activos.getActivosXUsuario);
router.post("/activosI", _activos.createNewActivo);

//router.get("/activos/count", getTotalActivos);

//router.get("/activos/:id", getActivoById);

router.get("/activos1/:EQC_codTag", _activos.getActivoByCodTag);

//router.delete("/activos/:id", deleteActivoById);

router.put("/activos/:id", _activos.updateActivoById);
var _default = router;
exports["default"] = _default;