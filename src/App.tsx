import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Todos from "./components/TodoList/Todos";
import Todo from "./components/TodoList/Todo";
import { SnackbarContext } from "./lib/snackbarContext";
import { useSnackbar } from "./lib/useSnackbar";
import GlobalSnackbar from "./components/Snackbar/GlobalSnackbar";

function App() {
  const snackbar = useSnackbar();

  return (
    <div className="App">
      <SnackbarContext.Provider value={snackbar}>
        <GlobalSnackbar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />}>
            <Route path="settings" element={<div>setting</div>} />
            <Route path="todo" element={<Todos />} />
            <Route path="todo/:id" element={<Todo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SnackbarContext.Provider>
    </div>
  );
}

export default App;
