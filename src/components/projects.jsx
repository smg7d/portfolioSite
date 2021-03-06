import React, { Component } from 'react';
import ProjectCard from './projectCard';
import ProjSvg from '../static/img/projects/project.svg'
import ZeldaImg from '../static/img/projects/zelda.jpg'
import FriendshipImg from '../static/img/projects/instagram.jpg'
import HomeTempImg from '../static/img/projects/thermostat.jpg'
import ChatImg from '../static/img/projects/chat.jpg'
import './projects.css';

class Projects extends Component {
    state = {
        zelda : {
            cardDescription: "A simple, console-based text game. Guide Link to the triforce \
            by collecting items and vanquising foes along the way.",
            cardTitle : "AsciiZelda",
            cardFooter: "C++",
            leftImg: ProjSvg,
            rightImg: ZeldaImg,
            link: "/zelda",
        },
        friendshipParadox : {
            cardDescription: "Verifying a property of social networks using the Instagram API",
            cardTitle : "FriendshipParadox",
            cardFooter: "Python",
            leftImg: ProjSvg,
            rightImg: FriendshipImg,
            link: "/friendshipParadox",
        },
        homeTempData: {
            cardDescription: "Gathering and analyzing home temperature data using a raspberry pi.",
            cardTitle : "HomeTempData",
            cardFooter: "Python, Rpi, Bash",
            leftImg: ProjSvg,
            rightImg: HomeTempImg,
            link: "/homeTempData",
        },
        excelChat: {
            cardDescription: "A simple, no-frills, multi-user chat application all based in Excel.",
            cardTitle : "ExcelChat",
            cardFooter: "VBA, SQL",
            leftImg: ProjSvg,
            rightImg: ChatImg,
            link: "/excelChat",
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className="projectContainer">
                    <div className="projectTitle">Projects</div>
                    <div className="projectGrid">
                        <ProjectCard proj={this.state.zelda} />
                        <ProjectCard proj={this.state.friendshipParadox}/>
                        <ProjectCard proj={this.state.homeTempData}/>
                        <ProjectCard proj={this.state.excelChat}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;