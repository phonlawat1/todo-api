import express from "express";
import todoController from "./controller/todoController";

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use("/todos", todoController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
