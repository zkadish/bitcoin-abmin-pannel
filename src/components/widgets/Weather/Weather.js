import { withProps } from 'recompose';

import { WEATHER } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './weather.scss';

const Weather = withProps({
  title: WEATHER,
  icon: icon[WEATHER],
})(CommonWidget);

export default Weather;
