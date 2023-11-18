import React from "react";
import "./Landing.css";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing(props: any) {
  return (
    <div className="landing-page">
      <img
        src="https://my-demo-bucket-ak.s3.ap-south-1.amazonaws.com/girl.png"
        alt="girl"
        width={500}
      />
      {!props.user && (
        <div className="title">
          <h1 className="gradient">Welcome to course selling website!</h1>
        </div>
      )}
      {props.user && (
        <div className="title">
          <h1>Improve your coding skills with </h1>
          <h1 className="gradient">Coding classes</h1>
        </div>
      )}

      {!props.user && (
        <div className="btns">
          <a href="/signup">Register</a>
          <br />
          <a href="/login">Login</a>
        </div>
      )}
    </div>
  );
}

export default Landing;
