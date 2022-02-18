import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function AddTodoDialog({
  open,
  onClose,
  action,
}: {
  open: boolean;
  onClose: Function;
  action: Function;
}) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(2);

  const handleClose = () => {
    onClose(open);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new todo</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter informations.</DialogContentText>
        <TextField
          autoFocus
          id="description"
          label="Todo Description"
          type="text"
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
          fullWidth
          variant="standard"
        />
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Age"
          onChange={({ target }) => {
            const newPriority = target.value as number;
            setPriority(newPriority);
          }}
        >
          <MenuItem value={1}>High</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>Low</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            action(description, priority);
            handleClose();
            setDescription("");
            setPriority(2);
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
