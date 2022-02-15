import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

export default function Settings() {
  return (
    <div className="container">
      <div className="row text-center" style={{ justifyContent: "center" }}>
        <div className="col-lg-7">
          <List>
            <ListItem>
              <ListItemText>Cambia password</ListItemText>
              <Button>Cambia password</Button>
            </ListItem>
            <ListItem>
              <ListItemText>Cambia avatar</ListItemText>
              <Button>Cambia avatar</Button>
            </ListItem>
            <ListItem>
              <ListItemText>Elimina account</ListItemText>
              <Button color="error" variant="contained">
                Elimina account
              </Button>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
