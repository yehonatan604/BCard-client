import "./main.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Flowbite } from "flowbite-react";
import AppRouter from "./UI/router/AppRouter.tsx";
import { Provider } from "react-redux";
import store from "./core/store/Store.ts";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <AppRouter />
        <ToastContainer />
      </Flowbite>
    </Provider>
  </React.StrictMode>,
);
