import { Box, Divider, Fab, LinearProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { todos } from "../../costants/faker";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
};

export default function Todos() {
  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <Link
            key={todo.id}
            to={`/todo/${todo.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="row g-0 mt-3 mb-4" style={{ alignItems: "center" }}>
              <div className="col-10 text-center">
                <h3>{todo.description}</h3>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ width: "90%", ml: "1rem", mr: "1rem" }}>
                    <LinearProgress
                      variant="determinate"
                      value={35}
                      color="success"
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >{`${Math.round(35)}%`}</Typography>
                  </Box>
                </Box>
              </div>
              <div className="col-2 text-center">
                <ChevronRightIcon />
              </div>
            </div>
            <Divider />
          </Link>
        );
      })}
      <Fab onClick={() => {}} sx={fabStyle} aria-label="add" color="primary">
        <AddIcon />
      </Fab>
    </div>
  );
}
