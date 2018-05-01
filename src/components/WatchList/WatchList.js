import React from 'react';

import SvgIcon from '../FontAweIcon';

import './watch-list.scss';

const WatchList = () => (
  <div className="watch-list">
    <header className="watch-list__header">
      <SvgIcon
        type="far"
        name="fa-list-alt"
        size="fa-2x"
      />
      Watch List
    </header>
  </div>
);

export default WatchList;
