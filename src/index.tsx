import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "App";
import { makeStore } from "app/store";
import { ToastProvider } from "context/ToastContext/ToastContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = makeStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
