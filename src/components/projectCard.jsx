import React, { Component } from 'react';
import './projectCard.css';


class ProjectCard extends Component {
    
    
    render () {

        let { cardDescription, cardFooter, cardTitle, leftImg, rightImg } = this.props.proj;

        return (
            <div className="projectCardWrapper">
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
            </div>
        )
    }
}

export default ProjectCard;