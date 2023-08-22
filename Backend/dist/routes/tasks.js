"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var routes = (0, _express.Router)();
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
routes.get("/tasks", _tasks.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total de mis tareas
 *    tags: [Tasks]
 */
routes.get("/tasks/count", _tasks.getTaskCount);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task por Id
 *    tags: [Tasks]
 */
routes.get("/tasks/:id", _tasks.getTaskId);
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: guardar una nueva tarea
 *    tags: [Tasks]
 */
routes.post("/tasks", _tasks.saveTasks);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: eliminar una tarea por id
 *    tags: [Tasks]
 */
routes["delete"]("/tasks/:id", _tasks.deleteTasks);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
routes.put("/tasks/:id", _tasks.updateTask);
var _default = routes;
exports["default"] = _default;