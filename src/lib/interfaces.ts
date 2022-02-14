export interface ITodo {
  description: string;
  done: boolean;
  id: number;
  priority: number;
}

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ITask {
  todoId: number;
  description: string;
  done: boolean;
  id: number;
}
