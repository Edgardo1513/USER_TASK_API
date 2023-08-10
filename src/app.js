const express = require("express");
const db = require("./utils/database");
const cors = require("cors");
const taskRoutes = require('./routes/tasks.routes');
const userRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');
require("dotenv").config();
const initModels = require('./models/initModels');



initModels();

db.sync()
  .then(() => console.log("Synchronized base!"))
  .catch((error) => console.log(error));

const app = express();

const PORT = process.env.PORT ?? 8000;


app.use(express.json());
app.use(cors());
app.use(categoriesRoutes);
app.use(taskRoutes);
app.use(userRoutes);



app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});