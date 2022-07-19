import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Yarin Baruch Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
