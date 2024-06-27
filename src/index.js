import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// /////////////////////////
// bootstrap
// /////////////////////////
import "bootstrap/dist/css/bootstrap.min.css";
// /////////////////////////
// routing
// /////////////////////////
import { BrowserRouter } from "react-router-dom";
// /////////////////////////
// redux
// ////////////////////////
import { Provider } from "react-redux";
import { store } from "./rtk/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
