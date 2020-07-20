import React, { Component } from 'react';
import NavBar from './components/navbar';
import Hero from './components/heroIntro';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </React.Fragment>
      
    )
  }
}

export default App;
