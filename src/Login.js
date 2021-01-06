import React from "react";
// import logo from "./logo.svg";
import { Auth } from "aws-amplify";
import "./App.css";

export default function Login() {
  return (
    <div className="window">
      <h1>Welcome to Login Page!</h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign In with google
      </button>
      {/* <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      <button onClick={() => getUser()}>get User</button>
      <button onClick={() => Auth.signOut()}>sign out</button> */}
    </div>
  );
}
