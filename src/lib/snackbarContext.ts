import { createContext } from "react";

export const SnackbarContext = createContext({
  message: "",
  color: "",
  isOpen: false,
  timeout: 2000,
  handleClose: () => {},
  handleActivate: (color: string, message: string, newTimer?: number) => {},
});
