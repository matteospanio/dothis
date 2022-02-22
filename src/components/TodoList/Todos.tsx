import {
  CircularProgress,
  Divider,
  Fab,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { onSnapshot, Timestamp } from "firebase/firestore";
import { ITag, ITodo } from "../../lib/interfaces";
import { TodoContext } from "../../lib/todoContext";
import {
  addTodo,
  getCurrentUser,
  getTodoByUserId,
} from "../../services/firebase";
import AddTodoDialog from "../Dialogs/AddTodoDialog";
import styles from "../../styles/Todos.module.css";

export default function Todos() {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const [addTodoIsOpen, setAddTodoIsOpen] = useState(false);

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [fetchedData, setFetchedData] = useState(false);

  const [todoContext, setTodoContext] = useState<ITodo>({
    description: "",
    id: "",
    createdAt: Timestamp.fromDate(new Date()),
    lastUpdate: Timestamp.fromDate(new Date()),
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
      createdAt: Timestamp.fromDate(new Date()),
      lastUpdate: Timestamp.fromDate(new Date()),
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
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4} className={styles.todoList}>
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
                          <Typography variant="h5">
                            {todo.description}
                          </Typography>
                          {todo.tag.map((tag, index) => {
                            return (
                              <Chip
                                key={index}
                                color={tag.color}
                                size={"small"}
                                label={tag.name}
                                className="me-1"
                              />
                            );
                          })}
                          <Typography mt={1} variant="body2">
                            {"Created: " +
                              todo.createdAt.toDate().toLocaleDateString()}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
              <Fab
                onClick={() => fabClickHandler(addTodoIsOpen)}
                className={styles.fab}
                aria-label="add"
                color="primary"
              >
                <AddIcon />
              </Fab>
            </List>
          ) : (
            <CircularProgress />
          )}
        </Grid>
        <Grid item xs={8}>
          <TodoContext.Provider value={todoContext}>
            <Outlet />
          </TodoContext.Provider>
        </Grid>
      </Grid>
      <AddTodoDialog
        open={addTodoIsOpen}
        onClose={fabClickHandler}
        action={handleAddTodoDialog}
      />
    </div>
  );
}
