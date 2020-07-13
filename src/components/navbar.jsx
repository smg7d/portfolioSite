import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    render() {
        return ( 
            <nav className="navbar topnav">
                <a className="navbar-brand" href="#">
                    this is some sample text
                    <span className="badge badge-pill badge-secondary">
                    </span>
                </a>
        </nav>);
    }
}

export default NavBar;