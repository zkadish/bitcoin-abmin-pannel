import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

const SvgIcon = ({
  type,
  name,
  size,
  custom,
}) => (
  <i className={cx({
      [type]: type,
      [name]: name,
      [size]: size,
      [custom]: custom,
    })}
  />
);

SvgIcon.propTypes = {
  type: string,
  name: string.isRequired,
  size: string,
  custom: string,
};

SvgIcon.defaultProps = {
  type: 'fas',
  size: '',
  custom: '',
};

export default SvgIcon;
