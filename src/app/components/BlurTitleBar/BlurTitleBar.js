import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class BlurTitleBar extends Component {
  render() {
    const { blurtitle, title } = this.props.data;
    return (
      <div className="bar">
        <div className="bar__blurtitle">{blurtitle}</div>
        <div className="bar__titlebar">
          <div className="bar__titlebar-title">{title}</div>
          <div className="bar__titlebar-line" />
        </div>
      </div>
    );
  }
}

BlurTitleBar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlurTitleBar;
