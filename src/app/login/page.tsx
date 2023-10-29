"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./login.css";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsValid] = useState(false);

  const loginHandler = () => {
    const login = {
      email,
      password,
    };

    const checkUser = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/admin/login",
          {
            ...login,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setIsValid(false);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        console.log(response);
      } catch (error) {
        console.log(error);
        setIsValid(true);
      }
    };
    checkUser();

    console.log(login);

    // setEmail('');
    // setPassword('');
  };

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
        {isvalid && (
          <Alert severity="error">
            Invalid email or password — <strong>check it out!</strong>
          </Alert>
        )}
        <div className="input">
          <TextField
            fullWidth={true}
            value={email}
            id="outlined-basic"
            label="Email Address*"
            type={"email"}
            variant="outlined"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth={true}
            value={password}
            id="outlined-basic"
            type={"password"}
            label="Password*"
            variant="outlined"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="btn-container">
          <Button
            variant="contained"
            className="btn"
            fullWidth={true}
            onClick={loginHandler}
          >
            sign in
          </Button>
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
