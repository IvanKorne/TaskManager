const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notfound");
const errorCustom = require("./middleware/error");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));
app.use(errorCustom);
app.use("/api/v1/tasks", tasks);
app.use(notFound);

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
