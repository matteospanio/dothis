import {
  CircularProgress,
  Divider,
  Fab,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Chip,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { ITag, ITodo } from "../../lib/interfaces";
import { TodoContext } from "../../lib/todoContext";
import {
  addTodo,
  getCurrentUser,
  getTodoByUserId,
} from "../../services/firebase";
import AddTodoDialog from "../Dialogs/AddTodoDialog";

const fabStyle = {
  position: "fixed",
  bottom: "1rem",
  left: "25%",
};

export default function Todos() {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const [addTodoIsOpen, setAddTodoIsOpen] = useState(false);

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [fetchedData, setFetchedData] = useState(false);

  const [todoContext, setTodoContext] = useState<ITodo>({
    description: "",
    id: "",
    createdAt: new Date(),
    lastUpdate: new Date(),
    priority: 1,
    done: false,
    tag: [],
    userId: currentUser.uid,
  });

  const handleAddTodoDialog = async (
    description: string,
    priority: number,
    tag: ITag[] = []
  ) => {
    await addTodo({
      description,
      done: false,
      priority,
      createdAt: new Date(),
      lastUpdate: new Date(),
      tag,
      userId: currentUser.uid,
    });
  };

  useEffect(() => {
    let isMounted = true;
    const q = getTodoByUserId(currentUser.uid);
    onSnapshot(q, (querySnapshot) => {
      if (isMounted)
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            description: doc.data().description,
            done: doc.data().done,
            priority: doc.data().priority,
            createdAt: doc.data().createdAt,
            lastUpdate: doc.data().lastUpdate,
            tag: doc.data().tag,
            userId: doc.data().userId,
          }))
        );
    });
    setFetchedData(true);
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fabClickHandler = (status: boolean) => {
    setAddTodoIsOpen(!status);
  };

  return (
    <div className="container-fluid" style={{ paddingRight: "2rem" }}>
      <div className="row">
        <div
          className="col-4"
          style={{
            padding: 0,
            margin: 0,
            height: "90vh",
            borderRight: "rgb(200,200,200) solid 1px",
          }}
        >
          {fetchedData ? (
            <List>
              {todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <ListItem>
                      <ListItemButton
                        onClick={() => {
                          setTodoContext(todo);
                          navigate(`/todo/${todo.id}`);
                        }}
                      >
                        <ListItemText>
                          <h5>{todo.description}</h5>
                          {todo.tag.map((tag, index) => {
                            return (
                              <Chip
                                key={index}
                                color={tag.color}
                                size={"small"}
                                label={tag.name}
                              />
                            );
                          })}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="col-8">
          <TodoContext.Provider value={todoContext}>
            <Outlet />
          </TodoContext.Provider>
        </div>
      </div>
      <AddTodoDialog
        open={addTodoIsOpen}
        onClose={fabClickHandler}
        action={handleAddTodoDialog}
      />
      <Fab
        onClick={() => fabClickHandler(addTodoIsOpen)}
        sx={fabStyle}
        aria-label="add"
        color="primary"
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
