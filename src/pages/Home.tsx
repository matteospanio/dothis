import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TodoDrawer from "../components/Drawer/TodoDrawer";

export default function Home() {
  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  return (
    <div>
      <Navbar drawerHandler={handleDrawer} />
      <TodoDrawer displayDrawer={displayDrawer} drawerHandler={handleDrawer} />
      <Outlet />
    </div>
  );
}
