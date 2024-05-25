import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./core/store/Store.ts";
import Layout from "./Layout.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
