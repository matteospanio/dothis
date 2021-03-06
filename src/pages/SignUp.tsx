import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { SnackbarContext } from "../lib/snackbarContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase";
import * as ROUTES from "../constants/routes";
import styles from "../styles/Auth.module.css";

export default function SignUp() {
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
    try {
      const createdUserResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(createdUserResult.user, {
        displayName: name,
        photoURL:
          "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
      });
      handleActivate("success", "Your account has been created.");
      navigate(ROUTES.HOME);
    } catch (e: any) {
      handleActivate("error", e.message);
    }
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <div className={"container " + styles.authscreen}>
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
                  Sign Up
                </Button>
                <Divider />
                <Typography className="mt-3 mb-3">
                  Already have an account? <Link to={ROUTES.LOGIN}>Log In</Link>
                </Typography>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
