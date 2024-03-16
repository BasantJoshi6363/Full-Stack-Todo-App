import Router from "express"
import { createTask, deleteTask, showTask, updateTask } from "./task.controller.js"


let taskRouter = Router()

taskRouter.route("/create").post(createTask);
taskRouter.route("/update/:id").put(updateTask);
taskRouter.route("/task").get(showTask);
taskRouter.route("/delete/:id").delete(deleteTask);




export default taskRouter