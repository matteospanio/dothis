import { User } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { ITag } from "../lib/interfaces";

const usersCollection = collection(db, "users");
const todosCollection = collection(db, "todos");

export async function doesUsernameExists(username: string) {
  const q = query(usersCollection, where("username", "==", username));

  const querySnapshot = await getDocs(q);

  let result: string[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc);
    result.push(doc.id);
  });

  if (result.length > 0) return true;
  return false;
}

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

export function getCurrentUser() {
  return auth.currentUser as User;
}
