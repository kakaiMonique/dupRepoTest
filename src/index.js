import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

var config = {
    apiKey: "AIzaSyB0i3ROCmfZ-mJO6awTuhNzIhOKXEmvHoE",
    authDomain: "info-340-stage-4.firebaseapp.com",
    databaseURL: "https://info-340-stage-4.firebaseio.com",
    projectId: "info-340-stage-4",
    storageBucket: "info-340-stage-4.appspot.com",
    messagingSenderId: "702374956095"
  };
  firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
