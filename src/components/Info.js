import React from "react"
import "./Info.css";
import Profile from "../images/Profile-pic.png"
import Email from "../images/email-icon.png";
import Linkedin from "../images/linkedin-icon.png"

export default function Info(){
    return(
        <div className="info">
            <img className="info-pic" src={Profile} alt="Profile Picture" />
            <div>
                <h2 className="info--name">Laura Smith</h2>
                <h3 className="info--designation">Frontend Developer</h3>
                <button className="info--website">laurasmith.website</button>
                <div className="info--buttons">
                 <button className="info--button--email"><img src={Email} alt="Email"/>Email</button>
                 <button className="info--button--linkedin"><img src ={Linkedin} alt="Linkedin"/> LinkedIn</button>
                
             </div>
            </div>
        </div>
    );
}

