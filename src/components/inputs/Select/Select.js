import React from 'react';
import { string, func, arrayOf } from 'prop-types';

import short from 'short-uuid';

const Select = ({
  id,
  value,
  onChange,
  options,
  className,
}) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className={className}
  >
    {options.map(option => (
      <option
        key={short.uuid()}
        value={option}
      >
        {option}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  options: arrayOf(string).isRequired,
  className: string,
};

Select.defaultProps = {
  className: '',
};

export default Select;
