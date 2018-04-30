import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

const SvgIcon = ({
  name,
  size,
  custom,
}) => (
  <i className={cx('fas', { [name]: name, [size]: size, [custom]: custom })} />
);

SvgIcon.propTypes = {
  name: string.isRequired,
  size: string,
  custom: string,
};

SvgIcon.defaultProps = {
  size: '',
  custom: '',
};

export default SvgIcon;
