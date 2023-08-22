import sql from "mssql";
import { DBTareas_Diarias, DBBiblioteca } from "../config";

export const connect = async () => {
  const pool = await sql.connect(DBTareas_Diarias);
  return pool;
};

export const connectBiblioteca = async () => {
  const pool = await sql.connect(DBBiblioteca);
  return pool;
};







// async function getConexion() {
//   const conn = await sql.connect(db);
//   const resultado = await conn.request().query("select 1 + 1");
//   console.log(resultado);
// }

// getConexion();

// const connect = async () => {
//   const conn = await sql.connect(db)
//   const resultado = await conn.request().query("select 1 + 1")

//   console.log(resultado)  
// };

// connect();

