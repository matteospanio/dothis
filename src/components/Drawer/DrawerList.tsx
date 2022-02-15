import { Divider, List } from "@mui/material";
import AllIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import DrawerListItem from "./DrawerListItem";
import DrawerListLogout from "./DrawerListLogout";
import DrawerListGithub from "./DrawerListGithub";
import HomeIcon from "@mui/icons-material/Home";
import * as ROUTES from "../../constants/routes";

export default function DrawerList() {
  return (
    <List>
      <DrawerListItem link={ROUTES.HOME} text="Home" icon={<HomeIcon />} />
      <DrawerListItem link={ROUTES.TODOS} text="Todos" icon={<AllIcon />} />
      <Divider />
      <DrawerListGithub />
      <DrawerListItem
        link={ROUTES.SETTINGS}
        text="Settings"
        icon={<SettingsIcon />}
      />
      <DrawerListLogout />
    </List>
  );
}
