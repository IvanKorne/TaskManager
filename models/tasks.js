const mongoose = require("mongoose");

//This sets the structure of the task manager (only strings and bools)
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide task"],
    trim: true,
    maxlength: [30, "Cannot be more than 30 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
