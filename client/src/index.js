import React from "react";
import ReactDOM from "react-dom";
import Store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";

const store = Store;

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
