import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from "./util/session_api_util"
import configureStore from "./store/store";
// import {signup, login, logout} from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

  // TEST //
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TEST //
});