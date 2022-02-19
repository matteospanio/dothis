import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ITag, TagColor } from "../../lib/interfaces";
import TagChips from "./TagChips";

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
  const [tags, setTags] = useState<ITag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const [newTagColor, setNewTagColor] = useState(TagColor.primary);

  const tagColors = [
    TagColor.default,
    TagColor.primary,
    TagColor.secondary,
    TagColor.error,
    TagColor.info,
    TagColor.success,
    TagColor.warning,
  ];

  const handleClose = () => {
    onClose(open);
    setPriority(2);
    setDescription("");
    setTags([]);
    setNewTagName("");
  };

  const handleChipDelete = (chip: ITag) => {
    const filteredTags = tags.filter((tag) => tag !== chip);
    setTags(filteredTags);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new todo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter informations about a new todo
        </DialogContentText>

        <TextField
          className="mb-2"
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
        <FormControl fullWidth className="mb-2">
          <InputLabel variant="standard">Priority</InputLabel>
          <Select
            aria-label="Priority"
            variant="standard"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            label="Priority"
            onChange={({ target }) => {
              const newPriority = target.value as number;
              setPriority(newPriority);
            }}
          >
            <MenuItem value={1}>High</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>Low</MenuItem>
          </Select>
        </FormControl>
        <div className="row mb-2 text-center">
          <div className="col">
            <TextField
              id="outlined-multiline-flexible"
              label="New Tag"
              maxRows={4}
              value={newTagName}
              onChange={({ target }) => {
                setNewTagName(target.value);
              }}
              fullWidth
              variant="standard"
            />
          </div>
          <div className="col">
            <Autocomplete
              id="controlled-demo"
              value={newTagColor}
              options={tagColors}
              onChange={(event: any, newValue: TagColor | null) => {
                if (newValue !== null) setNewTagColor(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Tag color" variant="standard" />
              )}
            />
          </div>
          <div className="col">
            <Button
              className="mt-2"
              variant="contained"
              color="primary"
              onClick={() => {
                if (newTagName !== "") {
                  setTags([...tags, { color: newTagColor, name: newTagName }]);
                  setNewTagName("");
                }
              }}
            >
              Add Tag
            </Button>
          </div>
        </div>
        <TagChips tags={tags} onDelete={handleChipDelete} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            action(description, priority, tags);
            handleClose();
            setDescription("");
            setPriority(2);
            setTags([]);
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
