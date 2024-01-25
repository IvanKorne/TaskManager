const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use(express.json());

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`The server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
