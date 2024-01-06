import React from 'react';
import './MobileHeader.css';

function MobileHeader({ setCurrentPage }) {
  return (
    <div className="Mobile-header-container">
      <div className="Mobile-left-content">

        <img className = "Mobile-Header-logo" src='../Images/CatIconWhite.png' width='60px' alt='Cafe Icon' /> 
       <div className='Mobile-Header-div'>Pawsitively Brewed</div>
      </div>
      <nav className="Mobile-Header-nav-menu">
        <ul>
          <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('cats')}>
              Cats
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('menu')}>
              Menu
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('booking')}>
              Booking
            </a>
          </li>
        </ul>
      </nav>
      <div className="Mobile-Header-social-icons">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/Images/youtubeicon.png" alt="YouTube" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/Images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/Images/twittericon.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/Images/instagramicon.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/Images/linkedinicon.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default MobileHeader;