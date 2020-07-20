import React, { Component } from 'react';
import './aboutMe.css';


class AboutMe extends Component {
    render() { 
        return ( 
            <div className="aboutMeContainer">
                <div className="aboutMeTitle">About Me</div>
                <div className="aboutMeParagraph">I currently work as a data engineer at Atlanta-based 
                healthcare startup <a href="https://loyalhealth.com/" target="_blank">Loyal</a> building ETL
                pipelines and managing all things data. My career started in finance, first modeling 
                mortgage-backed securities at Fannie Mae and later as a product specialist at Invesco, 
                where I worked on a team that used data to develop, message, and sell quantitative fixed 
                income products. 
                <br />
                <br />
                I caught the programming bug in graduate school at U.Va. during Stefano Grazioli's 
                <a href="https://dl.acm.org/doi/abs/10.5555/2693848.2694290?download=true" target="_blank"> hedging tournament </a> 
                and never looked back. Learning since then has been largely self-taught with some accredited 
                classes. More recently I enrolled in the <a href="https://omscs.gatech.edu/" target="_blank">OMSCS program</a> at 
                Georgia Tech. 
                <br />
                <br />
                Outside of work, I like to play squash, mess around with micro-controllers and SBCs, and talk about developments
                in python with others at PyAtl (come join <a href="https://www.meetup.com/python-atlanta/" target="_blank"> us</a>).
                <br />
                <br />
                <br />
                Here are the tools I mostly work with:

                <div className="toolsContainer">
                    <div className="languagesAndFrameworks">
                        <h4>Front End</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Material UI</li>
                            <li>HTML, CSS</li>
                        </ul>
                    </div>
                    <div className="spacingDiv"></div>
                    <div className="languagesAndFrameworks">
                        <h4>Back End</h4>
                        <ul>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>C#</li>
                            <li>ASP.NET</li>
                            <li>.NET Core</li>
                        </ul>
                    </div>
                    <div className="spacingDiv"></div>
                    <div className="languagesAndFrameworks">
                        <h4>Data & Viz</h4>
                        <ul>
                            <li>T-SQL</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Kafka</li>
                            <li>Airflow</li>
                            <li>Numpy, Pandas</li>
                            <li>R, TidyVerse</li>
                        </ul>
                    </div>
                    <div className="spacingDiv"></div>
                    <div className="languagesAndFrameworks">
                        <h4>Infra & Deployment</h4>
                        <ul>
                            <li>Docker</li>
                            <li>Linux</li>
                            <li>AWS, Azure</li>
                            <li>Raspberry Pi</li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
        );
    }
}
 
export default AboutMe;