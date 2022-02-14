import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target }: { target: any }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }: { target: any }) => {
    setPassword(target.value);
  };

  const handleClick = () => {
    console.log("login");
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
                  //border: "1px solid #0712ff",
                }}
              >
                <img width={200} src="/images/JUST_DO_IT.png" alt="Todo Logo" />
                <TextField
                  id="standard-basic"
                  label="Email"
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
                <Button
                  sx={{ margin: "1rem" }}
                  variant="contained"
                  onClick={handleClick}
                >
                  Log In
                </Button>
                <div>or</div>
                <Button
                  sx={{ margin: "1rem" }}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  color="secondary"
                >
                  Log In with Google
                </Button>
                <Divider />
                <Typography
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Missing account? <Link to="/signin">Sign In</Link>
                </Typography>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
