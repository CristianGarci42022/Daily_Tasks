"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
//documentacion de swagger-ui-express
var options = {
  definition: {
    info: {
      titulo: "tareas de mi api"
    }
  },
  apis: ["./src/routes/**/*.js"]
};
exports.options = options;