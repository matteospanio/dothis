import React, { useContext } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../lib/drawerContext";

export default function DrawerListItem({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: any;
}) {
  const navigate = useNavigate();
  const { handleDrawer } = useContext(DrawerContext);

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(link);
          handleDrawer();
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
