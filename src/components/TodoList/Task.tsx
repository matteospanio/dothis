import {
  Box,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ITask } from "../../lib/interfaces";
import { getTasksByTodoId } from "../../services/firebase";
import { TodoContext } from "../../lib/todoContext";
import PlusIcon from "@mui/icons-material/AddCircleOutlined";

export default function Task() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const todo = useContext(TodoContext);

  useEffect(() => {
    let isMounted = true;
    const q = getTasksByTodoId(id as string);
    onSnapshot(q, (querySnapshot) => {
      if (isMounted)
        setTasks(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todoId: id as string,
            description: doc.data().description,
            done: doc.data().done,
            priority: doc.data().priority,
            createdAt: doc.data().createdAt,
            lastUpdate: doc.data().lastUpdate,
          }))
        );
    });
    setFetchedData(true);
    return () => {
      isMounted = false;
    };
  }, [id]);

  return fetchedData ? (
    <div className="mt-3 ms-2">
      <h3 className="text-center">{todo.description}</h3>
      <div className="text-center">
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
        <IconButton>
          <PlusIcon />
        </IconButton>
      </div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tasks.map((task) => {
          return (
            <FormControlLabel
              key={task.id}
              label={task.description}
              control={<Checkbox checked={task.done} onChange={() => {}} />}
            />
          );
        })}
      </Box>
    </div>
  ) : (
    <CircularProgress />
  );
}
