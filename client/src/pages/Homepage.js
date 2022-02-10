import React, { Component } from 'react'

import Header from '../component/Header/Header'
import Logo from '../component/Header/Logo'
import NavigationBar from '../component/Header/NavigationBar'
import Footer from '../component/Footer/Footer'
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
                <Home>
                    
                </Home>
                <Footer />
            </div>
        );
    }
}

export default Homepage;