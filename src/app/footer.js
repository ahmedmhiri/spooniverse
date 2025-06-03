
import React from 'react';
 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="follow-text">FOLLOW US</div>
      <div className="social-icons">
        <a href="https://instagram.com" className="icon" data-label="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://pinterest.com" className="icon" data-label="Pinterest" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest-p"></i>
        </a>
        <a href="https://tiktok.com" className="icon" data-label="TikTok" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://facebook.com" className="icon" data-label="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="icon" data-label="X" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="https://youtube.com" className="icon" data-label="YouTube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
