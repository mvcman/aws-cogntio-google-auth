import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import "./App.css";
import { Auth } from "aws-amplify";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [userName, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const logout = () => {
    Auth.signOut();
    setLogin(false);
    setUsername("");
  };
  useEffect(() => {
    const getUser = async () => {
      const resp = await Auth.currentAuthenticatedUser();
      console.log(resp);
      console.log(resp.signInUserSession.accessToken.jwtToken);
      setUsername(resp.attributes.email);
      setToken(resp.signInUserSession.accessToken.jwtToken);
      setRefreshToken(resp.signInUserSession.refreshToken.token);
      setLogin(true);
    };
    getUser();
  }, [setUsername, setLogin]);
  return (
    <div className="App">
      <header className="App-header">
        {isLogin && (
          <Link to="/" onClick={() => logout()}>
            Logout
          </Link>
        )}
      </header>
      <Switch>
        <Route exact path="/">
          {isLogin ? (
            <Main
              username={userName}
              token={token}
              refreshToken={refreshToken}
            />
          ) : (
            <Login />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
