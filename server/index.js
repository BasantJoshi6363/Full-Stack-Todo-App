import express from "express";
import cors from "cors";
import { connectionTODatabase } from "./src/database/connection.js";
import taskRouter from "./src/database/task.routes.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

let app = express();

app.use(express.json());
app.use(cors({
  origin:["https://full-stack-todo-app-wvfc.vercel.app/],
  methods : ["POST","GET"],
  credentials : true
  }
));
app.use("/", taskRouter);
let port = process.env.PORT;
connectionTODatabase();
app.listen(port, () => {
  console.log("connected to server");
});
