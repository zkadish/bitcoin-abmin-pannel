import { withProps } from 'recompose';

import { PROFIT } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './profit.scss';

const Profit = withProps({
  title: PROFIT,
  icon: icon[PROFIT],
})(CommonWidget);

export default Profit;
