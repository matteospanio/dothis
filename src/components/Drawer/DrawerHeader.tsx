import Avatar from "@mui/material/Avatar";
import { getCurrentUser } from "../../services/firebase";

export default function DrawerHeader() {
  const currentUser = getCurrentUser();
  return (
    <div className="bg">
      <div className="header">
        <Avatar
          alt="Nome"
          src={
            currentUser?.photoURL
              ? currentUser.photoURL
              : "./images/avatar_linux.jpg"
          }
          sx={{ width: 56, height: 56, marginBottom: "1rem" }}
        />
        <h1>{currentUser?.displayName}</h1>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  );
}
