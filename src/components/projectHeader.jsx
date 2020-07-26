import React, { Component } from 'react';
import './projectHeader.css';

class ProjectHeader extends Component {
    render() { 
        return ( 
            <div className="projectHeaderContainer">
                {this.props.title}
                <div className="projectHeaderSubtitle">
                    {this.props.subtitle}
                </div>
                
            </div>
         );
    }
}
 
export default ProjectHeader;