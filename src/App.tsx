import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Todos from "./components/TodoList/Todos";
import Todo from "./components/TodoList/Todo";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
