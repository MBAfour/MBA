import React, { Component } from 'react';
import axios from 'axios';

import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import Footer from '../component/Footer/Footer'
import NavigationBar from '../component/Header/NavigationBar'
import DetailBody from '../detailpage/Detail'


class BookDetail extends Component {
    
    

    render() {
        return (
            <div>
                <Header />
                <Logo />
                <NavigationBar />
                <DetailBody />
                <Footer />
                
            </div>
        );
    }
}

export default BookDetail;
