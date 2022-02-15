import React, {Component} from 'react';

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Mypage from "./pages/Mypage";
import BookDetail from './pages/BookDetail';
import ItemCard from './component/Item/ItemCard';

//USE react-router-dom version 6
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/book/detail/:bookId" element={<BookDetail />} />
          <Route path="/book/detail/:id" element={<ItemCard />} />
        </Routes>
      </>
    );
  }
}

export default App;
