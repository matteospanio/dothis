import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TodoDrawer from "../components/Drawer/TodoDrawer";
import { auth } from "../lib/firebase";
import * as ROUTES from "../constants/routes";
import { SnackbarContext } from "../lib/snackbarContext";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const { currentUser } = auth;
  const navigate = useNavigate();
  const { handleActivate } = useContext(SnackbarContext);

  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  if (currentUser) {
    return (
      <div>
        <Navbar drawerHandler={handleDrawer} />
        <TodoDrawer
          displayDrawer={displayDrawer}
          drawerHandler={handleDrawer}
        />
        <Outlet />
      </div>
    );
  } else {
    handleActivate("error", "You must be logged in to see this page", 2500);
    setTimeout(() => navigate(ROUTES.LOGIN), 2000);
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
