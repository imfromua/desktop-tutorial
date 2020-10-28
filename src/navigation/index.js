import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FirebaseAuthConsumer } from "@react-firebase/auth";

export default function Navigation() {
  return (
    <div>
      <nav>
        <FirebaseAuthConsumer>
          {({ isSignedIn }) => {
            return !isSignedIn ? (
              <ul>
                <li>
                  <Link to="/signin">SignIn</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/openpage">Open Page</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/openpage">Open Page</Link>
                </li>
                <li>
                  <Link to="/closepage">Close Page</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            );
          }}
        </FirebaseAuthConsumer>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
  );
}
