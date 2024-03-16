import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


export let Task = mongoose.model("Task",taskSchema);