const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);
router.route("/").post(createTasks);
router.route("/:id").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
