import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";

export default function DrawerListLogout() {
  const handleClick = async () => {
    window.location.href = "https://github.com/matteospanio/dothis";
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <GithubIcon />
          </ListItemIcon>
          <ListItemText primary="Project source code" />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
