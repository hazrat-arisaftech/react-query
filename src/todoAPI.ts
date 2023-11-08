type Todo = {
  title: string;
  isDone: boolean;
};

let Todos: Todo[] = [{ title: "This is title", isDone: false }];

export const addTodo = (todo: Todo) => {
  Todos.push(todo);
};

export const allTodos = () => {
  return Todos;
};
