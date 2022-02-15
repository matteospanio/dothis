import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useContext } from "react";
import { SnackbarContext } from "../../lib/snackbarContext";

export default function GlobalSnackbar() {
  const { message, isOpen, timeout, color, handleClose } =
    useContext(SnackbarContext);
  const actualColor = color as AlertColor;
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={timeout}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={actualColor}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
