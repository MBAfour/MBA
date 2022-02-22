import React, {Component} from 'react';

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";
import Mypage from "./pages/Mypage";
import BookDetail from './pages/BookDetail';
import ItemCard from './component/Item/ItemCard';
import BookRegisterPage from './pages/BookRegisterPage';
import BookSearch from './component/Book/BookSearch';

import InfoUpdate from "./component/Mypage/infoUpdate";
import SaleList from './component/Mypage/SaleData';
import BestBidList from './component/Mypage/BestBidData';
import WishList from "./component/Mypage/WishData";

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
          <Route path="/book" element={<BookRegisterPage />} />

          <Route path="/mypage/*" element={<Mypage />} >
            <Route path="memberInfo" element={<InfoUpdate />} />
            <Route path="salelist" element={<SaleList />} />
            <Route path="bestbidlist" element={<BestBidList />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="" exact element={<InfoUpdate />} />

          </Route>


          <Route path="/book/detail/:bookId" element={<BookDetail />} />
          <Route path="/book/detail/:id" element={<ItemCard />} />
          <Route path="/chat/:bookId" element={<ChatPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
