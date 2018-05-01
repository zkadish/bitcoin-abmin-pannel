import { withProps } from 'recompose';

import { ALERTS } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './alerts.scss';

const Alerts = withProps({
  title: ALERTS,
  icon: icon[ALERTS],
})(CommonWidget);

export default Alerts;
