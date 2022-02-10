import React, {Component} from 'react';

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Mypage from "./pages/Mypage";

//USE react-router-dom version 6
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </>
    );
  }
}

export default App;
