import { withProps } from 'recompose';

import { NOTES } from '../../constants/appNames';
import icon from '../../constants/appIcons';
import CommonWidget from '../CommonWidget';

import './notes.scss';

const Notes = withProps({
  title: NOTES,
  icon: icon[NOTES],
})(CommonWidget);

export default Notes;
