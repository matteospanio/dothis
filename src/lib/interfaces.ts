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
  color: TagColor;
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

export enum TagColor {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  error = "error",
  info = "info",
  success = "success",
  warning = "warning",
}
