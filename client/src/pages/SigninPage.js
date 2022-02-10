import React, { Component } from 'react';

import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import Footer from '../component/Footer/Footer'
import NavigationBar from '../component/Header/NavigationBar'

class SigninPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Logo />
                <NavigationBar />
                <Footer />
            </div>
        );
    }
}

export default SigninPage;