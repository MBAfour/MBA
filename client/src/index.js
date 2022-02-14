import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";

//BrowserRouter, HashRouter: 페이지를 나눠준다.
ReactDOM.render(
    <BrowserRouter>
      <App />  
    </BrowserRouter>,
  document.getElementById("root")
);