import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">about is rendered</Route>
        <Route path="/">my test home</Route>
      </Switch>
    </div>
  );
}

export default App;
