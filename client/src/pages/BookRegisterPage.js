import React, { useState } from 'react';
import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import NavigationBar from '../component/Header/NavigationBar'
import Footer from '../component/Footer/Footer'

import BookSearch from '../component/Book/BookSearch'
import BookRegister from '../component/Book/BookRegister'

const BookRegisterPage = () => { 
  return (
    <div>
      <Header />
      <Logo />
      <NavigationBar />
      <BookSearch />
      <BookRegister />
      <Footer />
    </div >

  );
};

export default BookRegisterPage;