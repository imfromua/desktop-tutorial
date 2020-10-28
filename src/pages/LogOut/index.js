import React from "react";
import firebase from "firebase/app";

export default function LogOut() {
  const logOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <button onClick={logOut}>Log out</button>
    </div>
  );
}
