import { Router } from "express";
import { getTaskCount, getTasks, getTaskId, saveTasks, updateTask, deleteTasks } from "../controllers/tasks"
const routes = Router()
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */



/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Todas mis tareas
 *    tags: [Tasks]
 */
routes.get("/tasks", getTasks)
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total de mis tareas
 *    tags: [Tasks]
 */
routes.get("/tasks/count", getTaskCount)
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task por Id
 *    tags: [Tasks]
 */
routes.get("/tasks/:id", getTaskId)
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: guardar una nueva tarea
 *    tags: [Tasks]
 */
routes.post("/tasks", saveTasks)
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: eliminar una tarea por id
 *    tags: [Tasks]
 */
routes.delete("/tasks/:id", deleteTasks)
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
routes.put("/tasks/:id", updateTask)
export default routes;