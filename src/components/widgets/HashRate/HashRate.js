import { withProps } from 'recompose';

import { HASH_RATE } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './hash-rate.scss';

const HashRate = withProps({
  title: HASH_RATE,
  icon: icon[HASH_RATE],
})(CommonWidget);

export default HashRate;
