import React, { Component } from 'react'; 
import NavBar from '../components/navbar'
import ProjectHeader from '../components/projectHeader';
import Footer from '../components/footer';
import { p1, p2, p3, p4, p5, p6, p7 } from '../projects/homeTemp/text';
import houseTempData from '../projects/homeTemp/houseTempData.png'
import piTemp from '../projects/homeTemp/piTemp.jpg'
import rpi_gif from '../projects/homeTemp/rpi_gif.mp4.gif'
import temp_convert from '../projects/homeTemp/temp_convert.jpg'
import temp_read from '../projects/homeTemp/temp_read.jpg'
import './homeTempProject.css';

class HomeTempProject extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <ProjectHeader title="Home Temperature Logging" subtitle="monitoring and analyzing home temperature data"/>
                <div className="projectBody">
                    <h3>Project Overview</h3>
                    <div className="projectParagraph">{p1()}</div>  
                    <img className="longImg" src={piTemp}/>
                    <div className="imageCaption">A DS18B20 temperature sensor hooked up to a Raspberry Pi</div>
                    <div className="projectParagraph">{p2}</div>
                    <img src={temp_read}/>
                    <div className="imageCaption">We're "reading a file" that's actually a device</div>
                    <div className="projectParagraph">{p3}</div>
                    <img src={temp_convert}/>
                    <div className="imageCaption">Strip off the data we don't want and 'Muricanize it.</div>
                    <div className="projectParagraph">{p4}</div>
                    <img src={rpi_gif}/>
                    <div className="imageCaption">Testing the temperature sensor (I put my finger on the sensor here to make sure it registered differences in temperature well).</div>                    
                    <div className="projectParagraph">{p5}</div>
                    <img src={houseTempData}/>
                    <div className="projectParagraph">{p6}</div>
                    <br />
                    <div className="projectParagraph">{p7}</div>
                    <br />
                </div>
                <Footer />
            </React.Fragment>
            
         );
    }
}

export default HomeTempProject