import React from "react";
import { Divider, List } from "@mui/material";
import AllIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import DrawerListItem from "./DrawerListItem";
import DrawerListLogout from "./DrawerListLogout";

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
      <DrawerListLogout />
    </List>
  );
}
