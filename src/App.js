import React, { Component } from 'react';
import AboutMe from './components/aboutMe';
import ProjectHeader from './components/projectHeader';
import HomePage from './pages/homePage';
import { Route } from 'react-router';
import './App.css';
import { HashRouter } from "react-router-dom";
import ZeldaProject from './pages/zeldaProject';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Finance" component={ProjectHeader}/>
          <Route path="/Blog" component={AboutMe}/>
          <Route path="/Zelda" component={ZeldaProject}/>
        </HashRouter>
    )
  }
}

export default App;
