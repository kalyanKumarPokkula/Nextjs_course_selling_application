"use client";

import Login from "@/components/Login/Login";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const signinHandler = () => {
    console.log("Login using credientals");
    console.log(email.current?.value);
    console.log(password.current?.value);
  };

  const signinHandlerGithub = () => {
    console.log("Login using github");
    signIn("github", { callbackUrl: "/" });
  };

  const signinHandlerGoogle = () => {
    console.log("Login using Google");
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <>
      <Login
        email={email}
        password={password}
        onSigninHandler={signinHandler}
        onSigninHandlerGithub={signinHandlerGithub}
        onSigninHandlerGoogle={signinHandlerGoogle}
      />
    </>
  );
};

export default LoginPage;
