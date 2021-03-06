import React, { Component } from 'react'; 
import NavBar from '../components/navbar'
import ProjectHeader from '../components/projectHeader';
import Footer from '../components/footer';
import ProjectImg from '../components/projectImg';
import { p1, p2, p4, p5, p6, p7, p8, p9 } from '../projects/instagram/text';
import bob from '../projects/instagram/bob.svg'
import histogram from '../projects/instagram/paradoxHistogram.png'
import scatter from '../projects/instagram/paradoxScatter.png'
import rpi from '../projects/instagram/rpi.jpg'
import switchOut from '../projects/instagram/switch.jpg'
import userID from '../projects/instagram/userID.jpg'
import './instagramProject.css';

class InstagramProject extends Component {
    
    
    render() { 
        const cap1 = "Bob, throwing off the curve.";
        const cap2 = "Bob, throwing off the curve.";
        const cap3 = "Bob, throwing off the curve.";
        const cap4 = "Bob, throwing off the curve.";
        const cap5 = "Bob, throwing off the curve.";
        const cap6 = "Bob, throwing off the curve.";
        return ( 
            <React.Fragment>
                <NavBar />
                <ProjectHeader title="The Friendship Paradox" subtitle="a property of social networks"/>
                <div className="projectBody">
                    <h3>Project Overview</h3>
                    <div className="projectParagraph">{p1()}</div>
                    <ProjectImg imgSrc={bob} imgCaption={cap1} />
                    <br />
                    <br />
                    <h3>Testing the hypothesis</h3>
                    <div className="projectParagraph">{p2()}</div>
                    <div className="projectParagraph">{p4}</div>
                    <br />
                    <h3>Challenges</h3>
                    <div className="projectParagraph">{p5()}</div>
                    <ProjectImg imgSrc={userID} imgCaption="code to swap usernames for ids" />
                    <div className="projectParagraph">{p6()}</div>
                    <img src={switchOut}/>
                    <div className="projectParagraph">{p7()}</div>
                    <img src={rpi}/>
                    <div className="projectParagraph">{p8}</div>
                    <img src={histogram}/>
                    <div className="projectParagraph">{p9}</div>
                    <img src={scatter}/>
                    <ProjectImg imgSrc={userID} imgCaption="dumb test" />
                </div>
                <Footer />
            </React.Fragment>
            
         );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
}

export default InstagramProject