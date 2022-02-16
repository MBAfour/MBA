import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Mypage from "./pages/Mypage";
import BookRegisterPage from './pages/BookRegisterPage';

//USE react-router-dom version 6
class App extends Component {
  render() {
    return (
      <>
        <Routes>


          <Route exact path="/signin" element={<SigninPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/mypage" element={<Mypage />} />
          <Route exact path="/book" element={<BookRegisterPage />} />
          <Route exact path="/" element={<Homepage />} />

        </Routes>
      </>
    );
  }
}

export default App;
