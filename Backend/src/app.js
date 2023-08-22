import express  from "express";
// import  config  from "./config";
import tasksRoutes from "./routes/tasks"
import autorRoutes from "./routes/autores"
const app = express();
// app.set('port', config.port);
app.set("port", 5800);
app.use(express.json());
app.use(tasksRoutes);
app.use(autorRoutes);


export default app
