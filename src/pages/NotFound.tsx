import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackIcon from "@mui/icons-material/ArrowBack";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <div className="center">
        <div className="header">404</div>
        <div className="text">Page not found</div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/")}
          className="button mt-5"
          startIcon={<BackIcon />}
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
