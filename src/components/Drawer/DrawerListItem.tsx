import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerListItem({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: any;
}) {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "black" }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
