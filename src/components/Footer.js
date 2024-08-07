import React from "react";
import "./Footer.css";
import Twitter from '../images/Twitter-icon.png';
import FB from "../images/Facebook-icon.png";
import Insta from "../images/Instagram-icon.png"
import Git from "../images/GitHub-icon.png"
export default function Footer(){
    return(
        <div className="footer">
        <button className="footer-icon"><img src={Twitter} alt="twitter" /></button>
        <button className="footer-icon"><img src={FB} alt="Facebook"/></button>
        <button className="footer-icon"><img src={Insta} alt="Instagram"/></button>
        <button className="footer-icon"><img src={Git} alt="Github"/></button>
        
        </div>
    )
}