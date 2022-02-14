import Avatar from "@mui/material/Avatar";
import React from "react";
import { user } from "../../costants/faker";

export default function DrawerHeader() {
  return (
    <div className="bg">
      <div className="header">
        <Avatar
          alt="Nome"
          src={user.avatar}
          sx={{ width: 56, height: 56, marginBottom: "1rem" }}
        />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
