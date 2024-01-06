import React from 'react';

import './MobileAbout.css'


function MobileAbout() {
  return (
    <div className="Mobile-About-container">
      <div className="Mobile-About-section">
        <div className="Mobile-About-text">
          <h2 className='Mobile-About-h2'>Come Find Us</h2>
          <h4 className='Mobile-About-h4'>131 Water Street, St. John's, NL</h4>
          <p>Welcome to <span className='Mobile-About-underline'>Pawsitively Brewed</span>, the purrfect place to unwind and share memorable moments with our feline friends. Our cozy cat café is nestled in the heart of St. John's, where you can escape the hustle and bustle of the city and find comfort in the soothing company of our resident cats.  

          </p>
       
        </div>

        <img className='Mobile-About-img' src="../Images/cafe.jpg" alt="Cafe" />
      </div>

      <div className='Mobile-About-middleSection'></div>

      <div className= 'Mobile-About-section'>
        
        <div className="Mobile-About-text">
          <h2 className='Mobile-About-h2'>Hours of Operation</h2>
          <h4 className='Mobile-About-h4'>Open Everyday: 11AM - 8PM</h4>
          <p>We’re open daily to ensure that you can always find a moment of peace in the midst of your busy day. Our doors open from 11 AM to 8PM, offering a tranquil environment for coffee enthusiasts, cat lovers and anyone seeking a warm and welcoming atmosphere. </p>
        </div>

        <img className='Mobile-About-img' src="../Images/cat-image.jpg"alt="Cat" />

      </div>
    </div>
  );
}

export default MobileAbout;