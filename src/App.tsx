import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Todos from "./components/TodoList/Todos";
import Task from "./components/TodoList/Task";
import { SnackbarContext } from "./lib/snackbarContext";
import { useSnackbar } from "./lib/useSnackbar";
import GlobalSnackbar from "./components/Snackbar/GlobalSnackbar";
import * as ROUTES from "./constants/routes";
import Settings from "./pages/Settings";

function App() {
  const snackbar = useSnackbar();

  return (
    <div className="App">
      <SnackbarContext.Provider value={snackbar}>
        <GlobalSnackbar />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LogIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.HOME} element={<Home />}>
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.TODOS} element={<Todos />}>
              <Route path={ROUTES.TODO} element={<Task />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SnackbarContext.Provider>
    </div>
  );
}

export default App;
