import React, { Component } from 'react';
import styles from './Home.module.css'

class Home extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.contents}>
                   main content 
                </div>
            </div>
        );
    }
}

export default Home;