import React, { Component } from 'react';
import NavBar from '../components/navbar'
import ProjectHeader from '../components/projectHeader';
import Footer from '../components/footer';
import { p1, p2, p3, p4, p5, p6, p7 } from '../projects/excelChat/text';
import loadScreen from '../projects/excelChat/loadScreen.jpg'
import newRoom from '../projects/excelChat/newRoom.jpg'
import text_one from '../projects/excelChat/text_one.jpg'
import text_two from '../projects/excelChat/text_two.jpg'
import text_three from '../projects/excelChat/text_three.jpg'
import './zeldaProject.css';



class ExcelChatProject extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <NavBar />
                <ProjectHeader title="Excel Chat App" subtitle="the most ridiculous use of VBA you've ever seen"/>
                <div className="projectBody">
                    <h3>Project Overview</h3>
                    <div className="projectParagraph">{p1()}</div>
                    <h3>The concept</h3>
                    <div className="projectParagraph">{p2}</div>
                    <h3>Running the program</h3>
                    <div className="projectParagraph">{p3}</div>
                    <h3>Interface Overview</h3>
                    <div className="projectParagraph">{p4}</div>
                    <img src={loadScreen}/>
                    <div className="projectParagraph">{p5}</div>
                    <img src={newRoom}/>
                    <div className="projectParagraph">{p6}</div>
                    <img src={text_three}/>
                    <div className="projectParagraph">{p7}</div>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}
 
export default ExcelChatProject;