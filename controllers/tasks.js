const Task = require("../models/tasks.js");

const getAllTasks = (req, res) => {
  res.json("All items");
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update taksk");
};

const deleteTask = (req, res) => {
  res.send("delete");
};

module.exports = { getAllTasks, getTask, updateTask, deleteTask, createTasks };
