import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SnackbarContext } from "../lib/snackbarContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleActivate } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const handleNameChange = ({ target }: { target: any }) => {
    setName(target.value);
  };

  const handleEmailChange = ({ target }: { target: any }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }: { target: any }) => {
    setPassword(target.value);
  };

  const handleClick = async () => {
    console.log("login");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (e: any) {
      handleActivate("error", e.message);
    }
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="row g-0" style={{ justifyContent: "center" }}>
          <div className="col-md-6">
            <form>
              <Box
                sx={{
                  height: "auto",
                  width: "auto",
                  borderRadius: "1rem",
                  boxShadow: 24,
                  textAlign: "center",
                  padding: "1rem",
                  bgcolor: "background.paper",
                }}
              >
                <img width={200} src="/images/JUST_DO_IT.png" alt="Todo Logo" />
                <br />
                <TextField
                  id="standard-basic"
                  label="Name"
                  value={name}
                  onChange={handleNameChange}
                  sx={{
                    marginBottom: "1rem",
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{
                    marginBottom: "1rem",
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <br />
                <Button
                  sx={{ margin: "1rem" }}
                  variant="contained"
                  onClick={handleClick}
                >
                  Sign In
                </Button>
                <Divider />
                <Typography
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Already have an account? <Link to="/login">Log In</Link>
                </Typography>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
