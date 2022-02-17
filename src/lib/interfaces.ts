export interface ITodo {
  id: string;
  description: string;
  done: boolean;
  priority: number;
  createdAt: Date;
  lastUpdate: Date;
  tag: ITag[];
  userId: string;
}

export interface ITag {
  name: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
}

export interface ITask {
  todoId: string;
  description: string;
  done: boolean;
  id: string;
  priority: number;
  createdAt: Date;
  lastUpdate: Date;
}
