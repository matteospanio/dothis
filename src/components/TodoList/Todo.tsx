import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useParams } from "react-router-dom";
import { tasks } from "../../constants/faker";

export default function Todo() {
  const { id } = useParams();
  const uid = id as string;
  const tasksTodo = tasks.filter((task) => task.todoId === parseInt(uid));

  return (
    <div className="mt-3 ms-2">
      <h3 className="text-center">Titolo</h3>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {tasksTodo.map((task) => {
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
  );
}
