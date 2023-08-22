import { Router } from "express";
import { getAutorId, getAutorCount, getAutores, saveAutor,updateAutor,deleteAutor } from "../controllers/autores"
const routes = Router()

routes.get("/autores", getAutores)
routes.get("/autores/count", getAutorCount)
routes.get("/autores/:id", getAutorId)
routes.post("/autores", saveAutor)
routes.delete("/autores/:id", deleteAutor)
routes.put("/autores/:id", updateAutor)
export default routes;