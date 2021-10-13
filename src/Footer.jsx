import React from "react";

const Footer = () => {
  return (
    <>
      <footer data-cy="footer">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Footer;
