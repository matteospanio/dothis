import { IUser, ITodo, ITask } from "../lib/interfaces";

export const user: IUser = {
  name: "Matteo",
  email: "matteo@gmail.com",
  avatar: "/images/avatar_linux.jpg",
};

export const todos: ITodo[] = [
  {
    description: "Il mio primo todo",
    done: false,
    id: 1,
    priority: 1,
  },
  {
    description: "Studia calcolo 2",
    done: false,
    id: 2,
    priority: 1,
  },
];

export const tasks: ITask[] = [
  {
    todoId: 1,
    description: "fai qualcosa una volta",
    done: true,
    id: 1,
  },
  {
    todoId: 1,
    description: "fai qualcosaltro due volte",
    done: false,
    id: 2,
  },
  {
    todoId: 2,
    description: "studia",
    done: false,
    id: 3,
  },
];
