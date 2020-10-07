import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/heroIntro';
import AboutMe from '../components/aboutMe';
import Projects from '../components/projects';
import Footer from '../components/footer';

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

    componentDidMount() {
        window.scrollTo(0, 0)
      }
}
 
export default HomePage;