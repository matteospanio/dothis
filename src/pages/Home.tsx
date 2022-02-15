import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TodoDrawer from "../components/Drawer/TodoDrawer";
import { auth } from "../lib/firebase";
import * as ROUTES from "../constants/routes";
import { SnackbarContext } from "../lib/snackbarContext";
import { CircularProgress } from "@mui/material";
import { onAuthStateChanged, User } from "firebase/auth";
import { DrawerContext } from "../lib/drawerContext";

export default function Home() {
  const navigate = useNavigate();
  const { handleActivate } = useContext(SnackbarContext);

  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [user, setUser] = useState<User | null>();

  const handleDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
      handleActivate("error", "You must be logged in to see this page", 2500);
      setTimeout(() => navigate(ROUTES.LOGIN), 2000);
    }
  });

  if (user) {
    return (
      <div>
        <DrawerContext.Provider value={{ displayDrawer, handleDrawer }}>
          <Navbar />
          <TodoDrawer />
          <Outlet />
        </DrawerContext.Provider>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="col text-center">
          <CircularProgress size={64} />
          <br />
          Redirecting...
        </div>
      </div>
    );
  }
}
