import React from 'react';

import SvgIcon from '../FontAweIcon';

import './header.scss';

const Header = () => (
  <header className="ez-header">
    <SvgIcon
      name="fa-cube"
      size="fa-2x"
    />
    <h2 className="ez-header__title">
      EZ Miner Dashboard
    </h2>
    <SvgIcon
      className="ez-header"
      name="fa-user-circle"
      size="fa-2x"
    />
  </header>
);

export default Header;
