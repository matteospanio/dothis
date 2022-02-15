import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { IUser } from "../lib/interfaces";

const usersCollection = collection(db, "users");

export async function doesUsernameExists(username: string) {
  const q = query(usersCollection, where("username", "==", username));

  const querySnapshot = await getDocs(q);

  let result: string[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc);
    result.push(doc.id);
  });

  console.table(result);

  if (result.length > 0) return true;
  return false;
}

export async function addUser(user: IUser) {
  const newUser = doc(usersCollection);
  return await setDoc(newUser, user);
}
