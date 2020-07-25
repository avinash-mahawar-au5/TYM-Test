import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
