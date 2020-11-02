import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { FirebaseDatabaseProvider } from "@react-firebase/database";

import { firebaseConfig } from "./constants/firebaseConfig";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Navigation from "./navigation";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ClosePage from "./pages/ClosePage";
import OpenPage from "./pages/OpenPage";
import LogOut from "./pages/LogOut";

function PrivateRoute({ children, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
        <Router>
          <div className="App">
            <Navigation />
            <header className="App-header">
              <div>
                <FirebaseAuthConsumer>
                  {({ isSignedIn }) => {
                    return (
                      <Switch>
                        <Route path="/signin">
                          <SignIn />
                        </Route>
                        <Route path="/signup">
                          <SignUp />
                        </Route>
                        <Router path="/openpage">
                          <OpenPage />
                        </Router>
                        <PrivateRoute isAuth={isSignedIn} path="/closepage">
                          <ClosePage />
                        </PrivateRoute>
                        <PrivateRoute isAuth={isSignedIn} path="/logout">
                          <LogOut />
                        </PrivateRoute>
                      </Switch>
                    );
                  }}
                </FirebaseAuthConsumer>
              </div>
            </header>
          </div>
        </Router>
      </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
