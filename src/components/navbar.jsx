import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return ( 
            <nav className="topnav">
                <div className="leftNav">
                <div className="navItemLeft"><NavLink to="/">Tech</NavLink></div>
                    <div className="navItemLeft"><NavLink to="/Finance">Finance</NavLink></div>
                    <div className="navItemLeft"><NavLink to="/Blog">Blog</NavLink></div>
                </div>
                <div className="rightNav">
                    <div className="spacingDivNav"></div>
                    <div className="navItemRight"><a href="https://github.com/smg7d" target="_blank">GitHub</a></div> 
                    <div className="navItemRight"><a href="shaneGallagherResume.pdf" download>Resume</a></div>
                </div>
                               
        </nav>);
    }
}

export default NavBar;