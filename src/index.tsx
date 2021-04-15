import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Container } from "@cerebral/react";
import App from "./config/index";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Toolbar } from "./components/toolbar/Toolbar";
import { AddVehicle } from "./pages/add-vehicle/AddVehicle";

ReactDOM.render(
  <Container app={App}>
    <Toolbar />

    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/add-vehicle" component={AddVehicle} />
      </Switch>
    </BrowserRouter>
  </Container>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
