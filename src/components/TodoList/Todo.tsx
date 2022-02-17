import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ITask } from "../../lib/interfaces";
import { getTasksByTodoId } from "../../services/firebase";
import { TodoContext } from "../../lib/todoContext";

export default function Todo() {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const todo = useContext(TodoContext);

  useEffect(() => {
    const q = getTasksByTodoId(id as string);
    onSnapshot(q, (querySnapshot) => {
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
  }, [id]);

  return fetchedData ? (
    <div className="mt-3 ms-2">
      <h3 className="text-center">{todo.description}</h3>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tasks.map((task) => {
          return (
            <FormControlLabel
              key={task.id}
              label={task.description}
              control={<Checkbox checked={true} onChange={() => {}} />}
            />
          );
        })}
      </Box>
    </div>
  ) : (
    <CircularProgress />
  );
}
