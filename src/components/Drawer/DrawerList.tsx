import React from "react";
import { Divider, List } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AllIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import DrawerListItem from "./DrawerListItem";

export default function DrawerList() {
  return (
    <List>
      <DrawerListItem link="/todo" text="Todos" icon={<AllIcon />} />
      <Divider />
      <DrawerListItem
        link="/settings"
        text="Settings"
        icon={<SettingsIcon />}
      />
      <DrawerListItem link="/login" text="Logout" icon={<LogoutIcon />} />
    </List>
  );
}
