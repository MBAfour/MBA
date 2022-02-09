import React, { Component } from 'react'

import Header from '../component/Header'
import Logo from '../component/Logo'
import NavigationBar from '../component/NavigationBar'
import Footer from '../component/Footer'
import SimpleSlider from '../component/SimpleSlider'
import Home from '../component/Home'

class Homepage extends Component {
    render() {
        return(
            <div>
                <Header />
                <Logo />
                <NavigationBar />
                <SimpleSlider />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default Homepage;