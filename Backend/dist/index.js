"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import app from "./app";
// import "./database/conexionbd"
// app.listen(app.get('port'))
// console.log("Tu servidor es el puerto", app.get('port'))

// import "./database/conexionbd";
_app["default"].listen(5800);
console.log("Tu servidor es el puerto 5800");