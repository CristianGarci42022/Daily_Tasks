"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBTareas_Diarias = exports.DBBiblioteca = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var DBTareas_Diarias = {
  user: 'root',
  password: 'root',
  server: 'localhost',
  // port: 5800, // Cambia esto al puerto que estás utilizando
  database: 'Tareas_Diarias',
  options: {
    encrypt: true,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
exports.DBTareas_Diarias = DBTareas_Diarias;
var DBBiblioteca = {
  user: 'root',
  password: 'root',
  server: 'localhost',
  // port: 5800, // Cambia esto al puerto que estás utilizando
  database: 'Biblioteca',
  options: {
    encrypt: true,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

// export const DBTareas_Diarias = {
//   user: process.env.DB_HostTareasDiarias || 'user',
//   password: process.env.DB_Password || 'Password',
//   server: process.env.DB_Server || 'localhost',
//   database: process.env.DB_Database || 'database',
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true // change to true for local dev / self-signed certs
//   }
// };

// export const DBBiblioteca = {
//   user: process.env.DB_HostBiblioteca || 'user',
//   password: process.env.DB_PasswordB || 'Password',
//   server: process.env.DB_ServerB || 'localhost',
//   database: process.env.DB_DatabaseB || 'database',
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true // change to true for local dev / self-signed certs
//   }
// };
exports.DBBiblioteca = DBBiblioteca;