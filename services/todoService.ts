interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

let todos: Todo[] = [];

function getAllTodos(): Todo[] {
  return todos;
}

function createTodo(title: string, description: string): Todo {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

function getTodoById(id: string): Todo | undefined {
  return todos.find((todo) => todo.id === parseInt(id));
}

function updateTodo(
  id: string,
  title?: string,
  description?: string,
  completed?: boolean
): Todo | null {
  const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
  if (todoIndex === -1) {
    return null;
  }
  if (title !== undefined) todos[todoIndex].title = title;
  if (description !== undefined) todos[todoIndex].description = description;
  if (completed !== undefined) todos[todoIndex].completed = completed;
  return todos[todoIndex];
}

function deleteTodoById(id: string): boolean {
  const initialLength = todos.length;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  return todos.length !== initialLength;
}

export default {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodoById,
};
