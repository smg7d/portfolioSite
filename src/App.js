import React, { Component } from 'react';
import AboutMe from './components/aboutMe';
import ProjectHeader from './components/projectHeader';
import HomePage from './pages/homePage';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import { HashRouter } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import ZeldaProject from './pages/zeldaProject';
import HomeTempProject from './pages/homeTempProject';
import excelChatProject from './pages/excelChatProject';
import instagramProject from './pages/instagramProject';

class App extends Component {
  render() {
    return (
        <BrowserRouter >
          
          <Route path='/' exact component={HomePage}/>
          <Route path="/Finance" component={ProjectHeader}/>
          <Route path="/Blog" component={AboutMe}/>
          <Route path="/Zelda" component={ZeldaProject}/>
          <Route path="/homeTempData" component={HomeTempProject}/>
          <Route path="/excelChat" component={excelChatProject}/>
          <Route path="/friendshipParadox" component={instagramProject}/>
          
        </BrowserRouter>
    )
  }
  
}

export default App;
