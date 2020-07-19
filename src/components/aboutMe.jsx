import React, { Component } from 'react';
import './aboutMe.css';


class AboutMe extends Component {
    render() { 
        return ( 
            <div className="aboutMeContainer">
                <div className="aboutMeTitle">About Me</div>
                <div className="aboutMeParagraph">I currently work as a data engineer at an Atlanta-based 
                startup called <a href="https://loyalhealth.com/" target="_blank">Loyal</a>. I started my career in finance and spent the past five years helping 
                to tell the story around quantitative fixed income investing strategies. I'm a big fan of squash, 
                IoT, and python (come join us at <a href="https://www.meetup.com/python-atlanta/">PyAtl</a>).
                <br />
                <br />
                Here are the tools I work with:

                <div className="toolsContainer">
                    <div className="languagesAndFrameworks">
                        <h4>Languages</h4>
                        <ul>
                            <li>C#</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>R</li>
                            <li>Javascript</li>
                            <li>T-SQL</li>
                            <li>VBA</li>
                        </ul>
                    </div>
                    <div className="spacingDiv"></div>
                    <div className="languagesAndFrameworks">
                        <h4>Frameworks</h4>
                        <ul>
                            <li>Flask</li>
                            <li>Numpy + Pandas</li>
                            <li>React</li>
                            <li>HTML5/CSS3</li>
                            <li>Bootstrap</li>
                            <li>Heroku</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
            
        );
    }
}
 
export default AboutMe;

// change languages and frameworks to front end, backend, data, and infra
//front end
    //JavaScript
    //React
    //Material UI
    //CSS + HTML
//back end
    //Python
    //Flask
    //C#
    //ASP.Net Core
//data
    //T-SQL
    //PostGreSQL
    //MongoDB
    //Kafka
    //Redis
    //Spark
    //Hadoop
    //Airflow
    //Numpy, Pandas
    //R, TidyVerse
//infra
    //Docker + Kubernetes
    //Jenkins
    //Ansible
    //AWS (S3)
    //Azure
    //Linux
    //Terraform
    //Raspberry Pi, Arduino, Circuit Python 
