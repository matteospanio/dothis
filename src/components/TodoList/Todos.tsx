import {
  Divider,
  Fab,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Chip,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { todos } from "../../constants/faker";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "fixed",
  bottom: "1rem",
  left: "25%",
};

export default function Todos() {
  const navigate = useNavigate();
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
          <List>
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <ListItem>
                    <ListItemButton
                      onClick={() => navigate(`/todo/${todo.id}`)}
                    >
                      <ListItemText>
                        <h5>{todo.description}</h5>
                        <Chip
                          color="secondary"
                          size={"small"}
                          label="Chip Filled"
                        />
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
      <Fab onClick={() => {}} sx={fabStyle} aria-label="add" color="primary">
        <AddIcon />
      </Fab>
    </div>
  );
}

/*todos.map((todo) => {
        return (
          <Link
            key={todo.id}
            to={todo.id.toString()}
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
 className="container"      })*/
