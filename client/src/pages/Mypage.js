import React, { Component } from 'react';
import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import Footer from '../component/Footer/Footer'
import MypageMain from '../component/Mypage/Mypage'
import NavigationBar from '../component/Header/NavigationBar'

class Mypage extends Component {
  render() {
    return (
      <>
        <Header />
        <Logo />
        <NavigationBar />
        <MypageMain />
        <Footer />
      </>
    );
  }
}

export default Mypage;