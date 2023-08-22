import express  from "express";
import tasksRoutes from "./routes/tasks"
import autorRoutes from "./routes/autores"
import morgan from "morgan";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJSDoc(options);
const app = express();
app.use(cors())
app.set("port", 5800);

app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);
app.use(autorRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));


export default app
