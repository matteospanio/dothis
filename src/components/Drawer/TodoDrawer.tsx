import React, { useContext } from "react";
import { Drawer, Divider } from "@mui/material";
import DrawerHeader from "./DrawerHeader";
import DrawerList from "./DrawerList";
import { DrawerContext } from "../../lib/drawerContext";

export default function TodoDrawer() {
  const { displayDrawer, handleDrawer } = useContext(DrawerContext);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      handleDrawer();
    };

  return (
    <div>
      <Drawer anchor="left" open={displayDrawer} onClose={toggleDrawer()}>
        <div className="drawer">
          <DrawerHeader />
          <Divider />
          <DrawerList />
        </div>
      </Drawer>
    </div>
  );
}
