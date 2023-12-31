import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import router from "./src/routes";
import bodyParser from "body-parser";
import { catchError } from "./src/middlewares/catchError";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// cors
app.use(cors());
app.use(bodyParser.json());

// swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is the Dental Clinic application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: port,
      },
    ],
  },
  apis: ["./routes/api/*.ts"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// routes
app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// error handler
app.use(catchError);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
