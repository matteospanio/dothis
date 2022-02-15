import { useNavigate } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as ROUTES from "../../constants/routes";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { SnackbarContext } from "../../lib/snackbarContext";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function DrawerListLogout() {
  const navigate = useNavigate();
  const { handleActivate } = useContext(SnackbarContext);

  const handleClick = async () => {
    try {
      await signOut(auth);
      handleActivate("success", "User logged out");
      navigate(ROUTES.LOGIN);
    } catch (error: any) {
      handleActivate("error", error.message);
    }
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
