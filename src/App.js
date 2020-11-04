import React from "react";

import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/oddaj-rzeczy" component={Form} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
