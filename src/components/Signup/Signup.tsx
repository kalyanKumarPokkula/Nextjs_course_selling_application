import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import "./Signup.css";

type signupFormProps = {
  name: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  onSignupHandler: (Event: React.FormEvent) => void;
  onSignupHandlerGithub: (Event: React.FormEvent) => void;
  onSignupHandlerGoogle: (Event: React.FormEvent) => void;
};

export default function Signup({
  name,
  email,
  password,
  onSignupHandler,
  onSignupHandlerGithub,
  onSignupHandlerGoogle,
}: signupFormProps) {
  return (
    <div className="signup-page">
      <Card variant="outlined" className="signup-form">
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
          <Typography className="signup-title" component="h1" variant="h5">
            Sign up
          </Typography>
        </div>

        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required={true}
            inputRef={name}
          />
        </div>

        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type={"email"}
            inputRef={email}
            required={true}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
            inputRef={password}
            required={true}
          />
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            className="btn"
            fullWidth={true}
            onClick={onSignupHandler}
          >
            sign up
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
              onClick={onSignupHandlerGithub}
            >
              signup with Github
            </Button>
          </div>
          <div className="btn-container">
            <Button
              variant="contained"
              className="btn"
              onClick={onSignupHandlerGoogle}
            >
              signup with google
            </Button>
          </div>
        </div>

        <div
          className="bottom"
          style={{
            marginTop: "20px",
          }}
        >
          <p>Already a user? </p> <Link href="/login">Login</Link>
        </div>
      </Card>
    </div>
  );
}
