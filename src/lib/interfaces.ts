import { Timestamp } from "firebase/firestore";

export interface ITodo {
  id: string;
  description: string;
  done: boolean;
  priority: number;
  createdAt: Timestamp;
  lastUpdate: Timestamp;
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
  createdAt: Timestamp;
  lastUpdate: Timestamp;
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
