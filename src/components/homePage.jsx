import React, { Component } from 'react';
import NavBar from './navbar';
import Hero from './heroIntro';
import AboutMe from './aboutMe';
import Projects from './projects';
import Footer from './footer';

class HomePage extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <Hero />
                <AboutMe />
                <Projects />
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default HomePage;