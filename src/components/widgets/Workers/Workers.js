import { withProps } from 'recompose';

import { WORKERS } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './workers.scss';

const Workers = withProps({
  title: WORKERS,
  icon: icon[WORKERS],
})(CommonWidget);

export default Workers;
