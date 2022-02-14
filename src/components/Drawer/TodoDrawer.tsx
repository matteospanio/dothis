import React from "react";
import { Drawer, Divider } from "@mui/material";
import DrawerHeader from "./DrawerHeader";
import DrawerList from "./DrawerList";

export default function TodoDrawer({
  drawerHandler,
  displayDrawer,
}: {
  drawerHandler: Function;
  displayDrawer: boolean;
}) {
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      drawerHandler();
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
