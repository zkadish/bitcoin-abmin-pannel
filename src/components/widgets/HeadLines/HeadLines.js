import { withProps } from 'recompose';

import { HEAD_LINES } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './head-lines.scss';

const HeadLines = withProps({
  title: HEAD_LINES,
  icon: icon[HEAD_LINES],
})(CommonWidget);

export default HeadLines;
