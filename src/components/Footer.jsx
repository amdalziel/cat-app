import React from 'react';
import './Footer.css';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        Pawsitively Brewed
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="#" onClick={() => setCurrentPage('home')}>
              Home
            </a>
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
      </div>

      <hr />
      
      <div className='Footer-Bottom' >
      <div className="footer-copyright">
        &copy; 2023 Pawsitively Brewed
      </div>
      <div className="footer-social-icons">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="../Images/youtubeicon.png" alt="YouTube" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="../Images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="../Images/twittericon.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="../Images/instagramicon.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="../Images/linkedinicon.png" alt="LinkedIn" />
        </a>
      </div>

      </div>

      <a className = "Footer-IconReference" href="https://www.flaticon.com/free-icons/food-and-restaurant" 
        title="food and restaurant icons">Food and restaurant icons created by Siipkan Creative - Flaticon</a>
        
      
    </footer>
  );
}

export default Footer;