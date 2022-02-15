import Avatar from "@mui/material/Avatar";
import { user } from "../../constants/faker";
import { auth } from "../../lib/firebase";

export default function DrawerHeader() {
  const { currentUser } = auth;
  return (
    <div className="bg">
      <div className="header">
        <Avatar
          alt="Nome"
          src={currentUser?.photoURL ? currentUser.photoURL : user.avatar}
          sx={{ width: 56, height: 56, marginBottom: "1rem" }}
        />
        <h1>{currentUser?.displayName}</h1>
        <p>{currentUser ? currentUser.email : "no email"}</p>
      </div>
    </div>
  );
}
