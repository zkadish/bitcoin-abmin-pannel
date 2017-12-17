import React from 'react';
import short from 'short-uuid';
import fontawesome from '@fortawesome/fontawesome';
import * as icon from '@fortawesome/fontawesome-free-solid';

class FontAweIcon extends React.Component {
  constructor(props) {
    super(props);

    // console.log(fontawesome.icon(icon[this.props.iconName]));

    this.state = {
      svg: fontawesome.icon(icon[this.props.iconName]).abstract[0].attributes,
      path: fontawesome.icon(icon[this.props.iconName]).abstract[0].children,
    };
  }

  render() {
    // console.log(this.state.svg);
    // debugger;

    return (
      <svg
        className={this.state.svg.class}
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
