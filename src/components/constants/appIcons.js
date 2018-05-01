import React from 'react';
import * as appName from './appNames';
import SvgIcon from '../FontAweIcon';

export default {
  [appName.ALERTS]: <SvgIcon custom="hash-rate__icon" type="far" name="fa-bell" size="fa-2x" />,
  [appName.HASH_RATE]: <SvgIcon custom="hash-rate__icon" name="fa-hashtag" size="fa-2x" />,
  [appName.HEAD_LINES]: <SvgIcon custom="head-lines__icon" type="far" name="fa-newspaper" size="fa-2x" />,
  [appName.PROFIT]: <SvgIcon custom="profit__icon" name="fa-dollar-sign" size="fa-2x" />,
  [appName.NOTES]: <SvgIcon custom="notes__icon" type="far" name="fa-list-alt" size="fa-2x" />,
  [appName.WEATHER]: <SvgIcon custom="weather__icon" name="fa-cloud" size="fa-2x" />,
  [appName.WORKERS]: <SvgIcon custom="workers__icon" name="fa-cubes" size="fa-2x" />,
};
