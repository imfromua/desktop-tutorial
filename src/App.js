import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


import firebase from "firebase/app";
import "firebase/auth";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";

import {firebaseConfig} from './constants/firebaseConfig'

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <div>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
              if (isSignedIn === true) {
                return "Signed in";
              } else {
                return "Not signed in";
              }
            }}
      </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
      </div>
      </header>
     
    </div>
  );
}

export default App;
