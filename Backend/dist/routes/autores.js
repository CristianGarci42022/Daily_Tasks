"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _autores = require("../controllers/autores");
var routes = (0, _express.Router)();
routes.get("/autores", _autores.getAutores);
routes.get("/autores/count", _autores.getAutorCount);
routes.get("/autores/:id", _autores.getAutorId);
routes.post("/autores", _autores.saveAutor);
routes["delete"]("/autores/:id", _autores.deleteAutor);
routes.put("/autores/:id", _autores.updateAutor);
var _default = routes;
exports["default"] = _default;