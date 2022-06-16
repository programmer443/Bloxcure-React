import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Blox Cure React Context Provider
import { MaterialUIControllerProvider } from "context";
import { UserContextProvider } from 'context/userContext';

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
