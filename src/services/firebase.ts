import { User } from "firebase/auth";
import {
  collection,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { ITag } from "../lib/interfaces";

const todosCollection = collection(db, "todos");
const tasksCollection = collection(db, "tasks");

export async function addTodo({
  description,
  done,
  priority,
  createdAt,
  lastUpdate,
  tag,
  userId,
}: {
  description: string;
  done: boolean;
  priority: number;
  createdAt: Date;
  lastUpdate: Date;
  tag: ITag[];
  userId: string;
}) {
  const newTodo = doc(todosCollection);
  try {
    return await setDoc(newTodo, {
      description,
      done,
      priority,
      createdAt,
      lastUpdate,
      tag,
      userId,
    });
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export function getTasksByTodoId(id: string) {
  return query(
    tasksCollection,
    where("todoId", "==", id),
    orderBy("createdAt", "desc")
  );
}

export function getTodoByUserId(id: string) {
  return query(
    todosCollection,
    where("userId", "==", id),
    orderBy("createdAt", "desc")
  );
}

export function getCurrentUser() {
  return auth.currentUser as User;
}
