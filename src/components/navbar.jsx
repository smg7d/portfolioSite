import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    render() {
        return ( 
            <nav className="topnav">
                <div className="leftNav">
                <div className="navItemLeft"><a href="#">Tech</a></div>
                    <div className="navItemLeft"><a href="#">Finance</a></div>
                    <div className="navItemLeft"><a href="#">Blog</a></div>
                </div>
                <div className="rightNav">
                    <div className="spacingDivNav"></div>
                    <div className="navItemRight"><a href="#">GitHub</a></div> 
                    <div className="navItemRight"><a href="#">Resume</a></div>
                </div>
                               
        </nav>);
    }
}

export default NavBar;