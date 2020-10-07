import React, { Component } from 'react'; 
import NavBar from '../components/navbar'
import ProjectHeader from '../components/projectHeader';
import Footer from '../components/footer';
import { p1, p2, p3, p4, p5, p6, p7 } from '../projects/zelda/text';
import mainMenu from '../projects/zelda/mainMenu.jpg'
import battle from '../projects/zelda/battle.jpg'
import info from '../projects/zelda/info.jpg'
import item from '../projects/zelda/item.jpg'
import rock from '../projects/zelda/rock.jpg'
import start from '../projects/zelda/start.jpg'
import triforce from '../projects/zelda/triforce.jpg'
import './zeldaProject.css';

class ZeldaProject extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <ProjectHeader title="Ascii Zelda" subtitle="a rogue-like console game"/>
                <div className="projectBody">
                    <h3>Project Overview</h3>
                    <div className="projectParagraph">{p1()}</div>
                    <h3>Gameplay</h3>
                    <div className="projectParagraph">{p2}</div>
                    <img src={mainMenu}/>
                    <div className="projectParagraph">The info page lays out the details for the user.</div>
                    <img src={info}/>
                    <div className="projectParagraph">And the start of the game looks like this:</div>
                    <img src={start}/>
                    <div className="projectParagraph">{p3}</div>
                    <img src={item}/>
                    <div className="projectParagraph">{p4}</div>
                    <img src={rock}/>
                    <div className="projectParagraph">{p5}</div>
                    <img src={battle}/>
                    <div className="projectParagraph">{p6}</div>
                    <img src={triforce}/>
                    <h4>Running the program</h4>
                    <div className="projectParagraph">{p7()}</div>
                </div>
                <Footer />
            </React.Fragment>
            
         );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
}

export default ZeldaProject