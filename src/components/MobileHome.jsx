

import React from 'react';
import PropTypes from "prop-types";

// Components
import MobileIcon from "./MobileIcon";
import "./MobileIcon.css"
import Header from "./Header";
import About from "./About";
import Footer from './Footer';
import MobileSlideshow from './MobileSlideshow';
import MobileAbout from './MobileAbout';
import './MobileAbout.css'; 
import './MobileHome.css'; 

function MobileHome() {
  return (
    <>
  
      <MobileSlideshow images={catImages}/> 

      <MobileAbout /> 

      <div className='M-Home-iconOutline'>
        <MobileIcon 
          pic="local_cafe" 
          title="Ethically Sourced Coffee" 
          backgroundStyle={greenIcon} 
          h3Choice={h3StyleHome} 
          paragraph="At Pawsitively Brewed, we take pride in serving you more than just coffee; we serve a commitment to ethical practices. Our coffee is carefully selected from ethically sourced and sustainable suppliers, ensuring that every cup is a taste of responsibility and quality. Sip your favorite brew with a clear conscience." 
        />
        <MobileIcon 
          pic="location_city" 
          title="Locally Owned" 
          backgroundStyle={greenIcon} 
          h3Choice={h3StyleHome} 
          paragraph="We're not just your neighborhood café; we are a local treasure that supports the community. Pawsitively Brewed is locally owned and operated, and we cherish the opportunity to connect with your community and bring a slice of joy to your day. By choosing us, you're supporting a business deeply rooted in St. John's." 
        />
        <MobileIcon 
          pic="pets" 
          title="Join the Mission" 
          backgroundStyle={greenIcon} 
          h3Choice={h3StyleHome} 
          paragraph="Our mission extends beyond great coffee and adorable cats. We're on a mission to create a haven for our feline residents and a sanctuary for our guests. By visiting us, you're joining our cause to promote responsible pet ownership, cat adoption, and fostering a nurturing environment for our furry companions. Every visit, every cup and every moment spent with our cats contributes to this meaningful mission." 
        />
      </div>

      
 
    </>
  );
}

const catImages = [
  '../Images/SlideshowPic1.jpg',
  '../Images/SlideshowPicture2.jpg',
  '../Images/SlideshowPicture3.jpg',
  '../Images/SlideshowPicture4.jpg'
];

const greenIcon = {
  backgroundColor: "#6C8B2C",
  borderRadius: "100%",
  width: "75px",
  height: "75px",
  margin: "0 auto",
  padding: "10px",
  position: "relative"
};

const h3StyleHome = {
  color: "#6C8B2C",
  fontSize: "25px",
  fontFamily: "'Inter', sans-serif",
  lineHeight: "150%",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "20px"
};




export default MobileHome;
