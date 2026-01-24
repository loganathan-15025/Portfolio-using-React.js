import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with <span className="heart">❤️</span> by <span>LOGANATHAN S</span>
      </p>
      <br />
      <p>
        Copyright &copy; {new Date().getFullYear()} <span>Loganathan</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
