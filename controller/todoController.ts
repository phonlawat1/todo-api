import express from "express";
import { Request, Response } from "express";
import todoService from "../services/todoService";

const router = express.Router();

// GET /todos
router.get("/", (req: Request, res: Response) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
});

// POST /todos
router.post("/", (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTodo = todoService.createTodo(title, description);
  res.status(201).json(newTodo);
});

// GET /todos/:id
router.get("/:id", (req: Request, res: Response) => {
  const todo = todoService.getTodoById(req.params.id);
  if (!todo) {
    return res.status(404).json({ message: "To-do not found" });
  }
  res.json(todo);
});

// Patch /todos/:id
router.patch("/:id", (req: Request, res: Response) => {
  const { title, description, completed } = req.body;
  const updatedTodo = todoService.updateTodo(
    req.params.id,
    title,
    description,
    completed
  );
  if (!updatedTodo) {
    return res.status(404).json({ message: "To-do not found" });
  }
  res.json(updatedTodo);
});

// DELETE /todos/:id
router.delete("/:id", (req: Request, res: Response) => {
  const todo = todoService.getTodoById(req.params.id);

  const deleted = todoService.deleteTodoById(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "To-do not found" });
  }
  
  res.status(200).send({todo , message: "To-do delete complete"} );
});

export default router;
