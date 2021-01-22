import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper2">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Amjad Alsamman.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
