import React from 'react';
import { string, element } from 'prop-types';
import cx from 'classnames';

import './widget.scss';

const CommonWidget = ({
  blockClass,
  icon,
  title,
}) => (
  <div className={cx('widget', { [blockClass]: blockClass })}>
    <header className="widget__header">
      {icon}
      {title}
    </header>
  </div>
);

CommonWidget.propTypes = {
  title: string.isRequired,
  icon: element.isRequired,
  blockClass: string,
};

CommonWidget.defaultProps = {
  blockClass: '',
};

export default CommonWidget;
