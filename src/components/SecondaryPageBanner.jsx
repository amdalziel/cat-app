import React from 'react'
import './SecondaryPageBanner.css'; 
import PropTypes from "prop-types";

function SecondaryPageBanner({bannerImage, heading3, altStyling}) {
  return (
    <>
    <div className='Banner-menu'>
   
<img className="Banner-img" src={bannerImage} width={"100%"} height={"100%"} /> 
<div className='Banner-coverBox' style={{position: "absolute", top: altStyling}}>
    <h3 className='Banner-h3'>{heading3}</h3>
</div>
</div>
</> 
  )
}

var altStyling = {
  position: "absolute", 
  width: "100%", 
  height: "50%", 
  left: "0",
  top: "40%",  
  backgroundColor: "#220302", 
  objectFit: "contain" 
}

export default SecondaryPageBanner