import { Task } from "./task.models.js";
export let createTask = async (req, res) => {
  try {
    let { task, description } = req.body;
     await Task.create({
      task,
      description,
    });
    res.status(201).json({
      success: true,
      message: "Task created successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateTask = async (req, res) => {
  try {
    let id= req.params.id;
    let data = req.body
    console.log(data)
    let result = await Task.findByIdAndUpdate(
      id,
     data,
      { new: true }
    );  
    res.status(201).json({
      success: true,
      message: "Task updated successfully.",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let showTask = async (req, res) => {
  try {
    let task = await Task.find({});
    res.status(201).json({
      success: true,
      message: "read Task successfully.",
      task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteTask = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await Task.findByIdAndDelete(
      id
    );
    res.status(201).json({
      success: true,
      message: "Task deeeted successfully.",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

