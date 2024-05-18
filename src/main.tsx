import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Flowbite } from "flowbite-react";
import AppRouter from "./UI/router/AppRouter.tsx";
import { Provider } from "react-redux";
import store from "./core/store/Store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <AppRouter />
      </Flowbite>
    </Provider>
  </React.StrictMode>
);
