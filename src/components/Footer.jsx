import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | Developed by Priyanshu Dixit</p>
    </footer>
  );
}

export default Footer;
