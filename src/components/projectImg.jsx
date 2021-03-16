import React, { Component } from 'react';
import './projectImg.css';


class ProjectImg extends Component {
    
    render () {

        return (
            <div className="projectImgWrapper">
                <img className="projectImg" src={this.props.imgSrc}/>
                <div classname="imgCaption">{this.props.imgCaption}</div>
            </div>
        );
    }
}

export default ProjectImg;