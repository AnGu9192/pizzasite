import React from "react";
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <BsInstagram /> <FaTwitter /> <BsFacebook /> <FaLinkedinIn />
      </div>
      <p> &copy; 2021 jonspizza.com</p>
    </div>
  );
}

export default Footer;