import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Stonepedia. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://in.linkedin.com/">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
