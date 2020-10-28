import React, { useState } from "react";

import firebase from "firebase/app";

export default function SignIn() {
  const [email, setEmail] = useState(""); //number function object undefinded null string boolean
  const [password, setPassword] = useState("");

  const signInWithEmail = () => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <input
        placeholder="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
      />

      <input
        placeholder="password"
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />

      <button onClick={signInWithEmail}>Submit</button>
    </div>
  );
}
