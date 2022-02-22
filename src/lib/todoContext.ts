import { Timestamp } from "firebase/firestore";
import { createContext } from "react";
import { ITodo } from "./interfaces";

const dafaultTodo: ITodo = {
  description: "",
  id: "",
  createdAt: Timestamp.fromDate(new Date()),
  lastUpdate: Timestamp.fromDate(new Date()),
  priority: 1,
  done: false,
  tag: [],
  userId: "",
};

export const TodoContext = createContext(dafaultTodo);
