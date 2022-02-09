import React, {Component} from 'react';

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

//USE react-router-dom version 6
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/singup" element={<SignupPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
