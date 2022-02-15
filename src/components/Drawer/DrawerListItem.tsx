import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(link);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
