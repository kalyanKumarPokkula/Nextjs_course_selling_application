"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import axios from "axios";
import "./page.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const submitHandler = () => {
    if (
      firstName.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setIsValid(true);
      return;
    }

    const signup = {
      firstName,
      username: email,
      password,
    };

    setEmail("");
    setFirstName("");
    setPassword("");

    console.log(signup);

    const post = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/admin/signup",
          {
            ...signup,
          },

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    post();
  };

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

        {error && (
          <Alert severity="error">
            Admin already exists — <strong>check it out!</strong>
          </Alert>
        )}
        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Name*"
            variant="outlined"
            value={firstName}
            onChange={event => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email*"
            variant="outlined"
            type={"email"}
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password*"
            variant="outlined"
            type={"password"}
            value={password}
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
            onClick={submitHandler}
          >
            Sign up
          </Button>
        </div>

        <div className="bottom">
          <p>Already a user? </p> <Link href="/login">Login</Link>
        </div>
      </Card>
    </div>
  );
}
