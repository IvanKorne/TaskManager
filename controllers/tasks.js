const getAllTasks = (req, res) => {
  res.json("All items");
};
const createTasks = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json("update taksk");
};

const deleteTask = (req, res) => {
  res.json("delete");
};

module.exports = { getAllTasks, getTask, updateTask, deleteTask, createTasks };
