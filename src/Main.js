import React from "react";
// import { Auth } from "aws-amplify";
import "./App.css";

export default function Main({ username, token, refreshToken }) {
  return (
    <div>
      <h1>Welcome to My App {username}!</h1>
      <h3>
        Your Access Token:- <span>{token}</span>
      </h3>
      <h4>
        Your Refresh Token:- <span>{refreshToken}</span>
      </h4>
    </div>
  );
}
