import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer__powered-by"
        href="https://www.cryptocompare.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        powered by cryptocompare
      </a>
    </footer>
  )
}

export default Footer;
