import express from "express";
import cors from "cors";
import { connectionTODatabase } from "./src/database/connection.js";
import taskRouter from "./src/database/task.routes.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", taskRouter);

connectionTODatabase(); // Ensure this connects to your database

app.listen(port, () => {
  console.log(`Server connected and listening on port ${port}`);
});
