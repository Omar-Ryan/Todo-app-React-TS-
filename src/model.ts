import { Dispatch, SetStateAction } from "react";
export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
export interface Todos {
  todos: Todo [];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: Dispatch<SetStateAction<Todo[]>>;
}
