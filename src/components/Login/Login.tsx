import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./login.css";
import Link from "next/link";

type signinFormProps = {
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  onSigninHandler: (Event: React.FormEvent) => void;
  onSigninHandlerGithub: (Event: React.FormEvent) => void;
  onSigninHandlerGoogle: (Event: React.FormEvent) => void;
};

export default function Login({
  email,
  password,
  onSigninHandler,
  onSigninHandlerGithub,
  onSigninHandlerGoogle,
}: signinFormProps) {
  return (
    <div className="login-page">
      <Card variant="outlined" className="login-form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="login-title" component="h1" variant="h5">
            Sign in
          </Typography>
        </div>
        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email Address*"
            type={"email"}
            variant="outlined"
            inputRef={email}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth={true}
            inputRef={password}
            id="outlined-basic"
            type={"password"}
            label="Password*"
            variant="outlined"
          />
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            className="btn"
            fullWidth={true}
            onClick={onSigninHandler}
          >
            log in
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="btn-container">
            <Button
              variant="contained"
              className="btn"
              onClick={onSigninHandlerGithub}
            >
              Login with Github
            </Button>
          </div>
          <div className="btn-container">
            <Button
              variant="contained"
              className="btn"
              onClick={onSigninHandlerGoogle}
            >
              Login with Google
            </Button>
          </div>
        </div>

        <div className="bottom-login">
          <Link href="">Forgot password?</Link>
          <div>
            <p>New here?</p> <Link href="/signup">Register</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
