import { Router } from "express";
import { getTaskCount, getTasks, getTaskId, saveTasks,updateTask,deleteTasks } from "../controllers/tasks"
const routes = Router()

routes.get("/tasks", getTasks)
routes.get("/tasks/count", getTaskCount)
routes.get("/tasks/:id", getTaskId)
routes.post("/tasks", saveTasks)
routes.delete("/tasks/:id", deleteTasks)
routes.put("/tasks/:id", updateTask)
export default routes;