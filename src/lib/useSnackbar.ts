import { useState } from "react";
export const useSnackbar = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("success");
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(2000);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleActivate = (color: string, message: string, newTimer = timer) => {
    setIsOpen(true);
    setColor(color);
    setTimer(newTimer);
    setMessage(message);
  };

  return {
    message,
    color,
    isOpen,
    timeout: timer,
    handleClose,
    handleActivate,
  };
};
