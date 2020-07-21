import React, { Component } from 'react';
import './heroIntro.css';


class Hero extends Component {
    render() {
        return (
            <div className="heroContainer">
                <div className="heroPreText">Hi, my name is</div>
                <div className="heroName">Shane Gallagher</div>
                <div className="heroPostText">I'm a data engineer based in Atlanta, Ga.</div>
                <div className="heroButton">
                    <a href="mailto:shane.m.gallagher@gmail.com" target="_blank">
                        shane.m.gallagher@gmail.com
                    </a>
                </div>
            </div> 
        );
    }
}

export default Hero;