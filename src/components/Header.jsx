
import React from 'react';
import './Header.css';

function Header({ setCurrentPage }) {
  return (
    <header className="header-container">
      <div className="left-content">

        <img className = "Header-logo" src='../Images/CatIconWhite.png' width='60px' alt='Cafe Icon' /> 
        Pawsitively Brewed
      </div>
      <nav className="nav-menu">
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
      <div className="social-icons">
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
    </header>
  );
}

export default Header;