import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    render() {
        return ( 
            <nav className="navbar topnav">
                <div className="leftNav">
                    <div className="navItemLeft"><a href="#">Me</a></div>
                    <div className="navItemLeft"><a href="#">Tech</a></div>
                    <div className="navItemLeft"><a href="#">Finance</a></div>
                </div>
                <div className="rightNav">
                    <div className="navItemRight"><a href="#">GitHub</a></div> 
                    <div className="navItemRight"><a href="#">Resume</a></div>
                </div>
                               
        </nav>);
    }
}

export default NavBar;