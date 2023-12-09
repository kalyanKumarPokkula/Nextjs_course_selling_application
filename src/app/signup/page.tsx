"use client";

import Signup from "@/components/Signup/Signup";
import { useRef } from "react";
import { signIn } from "next-auth/react";

const SignupPage = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const signupHandler = () => {
    console.log(email.current?.value);
    console.log(name.current?.value);
    console.log(password.current?.value);
  };

  const signupHandlerGithub = () => {
    console.log("Signup using Github");
    signIn("github", { callbackUrl: "/" });
  };

  const signuphandlerGoogle = () => {
    console.log("Signup using Google");
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <>
      <Signup
        name={name}
        email={email}
        password={password}
        onSignupHandler={signupHandler}
        onSignupHandlerGithub={signupHandlerGithub}
        onSignupHandlerGoogle={signuphandlerGoogle}
      />
    </>
  );
};

export default SignupPage;
