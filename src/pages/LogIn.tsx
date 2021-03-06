import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Divider, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { SnackbarContext } from "../lib/snackbarContext";
import * as ROUTES from "../constants/routes";
import styles from "../styles/Auth.module.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleActivate } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const handleEmailChange = ({ target }: { target: any }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }: { target: any }) => {
    setPassword(target.value);
  };

  const handleLoginWithEmailAndPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      handleActivate("success", "Logged in");
      navigate(ROUTES.HOME);
    } catch (e: any) {
      handleActivate("error", e.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
      handleActivate("success", "You're logged in!");
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
            <form onSubmit={handleLoginWithEmailAndPassword} method="POST">
              <Box
                className={styles.formBox}
                sx={{
                  boxShadow: 24,
                }}
              >
                <img width={200} src="/images/JUST_DO_IT.png" alt="Todo Logo" />

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
                  type="submit"
                >
                  Login
                </Button>
                <div>or</div>
                <Button
                  sx={{ margin: "1rem" }}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  color="secondary"
                  onClick={handleGoogleLogin}
                >
                  Login with Google
                </Button>
                <Divider />
                <Typography className="mt-3 mb-3">
                  Missing account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
                </Typography>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
