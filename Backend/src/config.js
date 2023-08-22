// config.js

export const DBTareas_Diarias = {
  user: 'root',
  password: 'root',
  server: 'localhost',
  // port: 5800, // Cambia esto al puerto que estás utilizando
  database: 'Tareas_Diarias',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

export const DBBiblioteca = {
  user: 'root',
  password: 'root',
  server: 'localhost',
  // port: 5800, // Cambia esto al puerto que estás utilizando
  database: 'Biblioteca',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
