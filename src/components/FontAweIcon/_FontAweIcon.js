import React from 'react';
import short from 'short-uuid';
import cx from 'classnames';
import fontawesome from '@fortawesome/fontawesome';
import * as solid from '@fortawesome/fontawesome-free-solid';
import * as brands from '@fortawesome/fontawesome-free-brands';

class FontAweIcon extends React.Component {
  constructor(props) {
    super(props);

    // console.log(fontawesome.icon(icon[this.props.iconName]));

    this.state = {
      svg: fontawesome.icon(solid[this.props.iconName]).abstract[0].attributes,
      path: fontawesome.icon(solid[this.props.iconName]).abstract[0].children,
    };
  }

  render() {
    // console.log(this.state.svg);
    // debugger;

    return (
      <svg
        className={cx(this.state.svg.class, { [`${this.props.size}`]: this.props.size })}
        viewBox={this.state.svg.viewBox}
      >
        {
          this.state.path.map((p) => {
            return (
              <path
                key={short.uuid()}
                d={p.attributes.d}
              />
            );
          })
        }
      </svg>
    );
  }
}

export default FontAweIcon;
