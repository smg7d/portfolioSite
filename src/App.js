import React, { Component } from 'react';
import NavBar from './components/navbar';
import Hero from './components/heroIntro';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Footer from './components/footer';
import ProjectHeader from './components/projectHeader';
import HomePage from './components/homePage';
import { Router, Route } from 'react-router';
import './App.css';
import { NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Finance" component={ProjectHeader}/>
          <Route path="/Blog" component={AboutMe}/>
        </HashRouter>
    )
  }
}

export default App;
