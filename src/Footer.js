import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright <b>ⓒ</b> {year} Rajat's Store</p>
    </footer>
  );
}

export default Footer;
