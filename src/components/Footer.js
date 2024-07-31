import React from "react";
import "./Footer.css";
import Twitter from '../images/Twitter-icon.png';
import FB from "../images/Facebook-icon.png";
import Insta from "../images/Instagram-icon.png"
import Git from "../images/GitHub-icon.png"
export default function Footer(){
    return(
        <div className="footer">
        <button className="footer-icon"><img src={Twitter}  /></button>
        <button className="footer-icon"><img src={FB} /></button>
        <button className="footer-icon"><img src={Insta} /></button>
        <button className="footer-icon"><img src={Git} /></button>
        
        </div>
    )
}