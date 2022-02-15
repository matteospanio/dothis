import { createContext } from "react";

export const DrawerContext = createContext({
  displayDrawer: false,
  handleDrawer: () => {},
});
