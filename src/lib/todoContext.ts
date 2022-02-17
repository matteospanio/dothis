import { createContext } from "react";
import { ITodo } from "./interfaces";

const dafaultTodo: ITodo = {
  description: "",
  id: "",
  createdAt: new Date(),
  lastUpdate: new Date(),
  priority: 1,
  done: false,
  tag: [],
  userId: "",
};

export const TodoContext = createContext(dafaultTodo);
