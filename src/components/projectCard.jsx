import React, { Component } from 'react';
import './projectCard.css';
import { NavLink } from 'react-router-dom';


class ProjectCard extends Component {
    
    
    render () {

        let { cardDescription, cardFooter, cardTitle, leftImg, rightImg, link } = this.props.proj;

        return (
                <div className="projectCardWrapper">
                    <NavLink to={link}>
                    <div className="projectCardHeader">
                        <div className="projectCardHeaderLeft">
                            <img src={leftImg}/>
                        </div>
                        <div className="projectCardHeaderRight">
                            <img src={rightImg}/>
                        </div>
                    </div>
                    <div className="projectCardBody">
                        <div className="projectCardTitle">
                            {cardTitle}
                        </div>
                        <div className="projectCardDesc">
                            {cardDescription}
                        </div>
                    </div>
                    <div className="ProjectCardFooter">
                        {cardFooter}
                    </div>
                    </NavLink>
                </div>
        )
    }
}

export default ProjectCard;