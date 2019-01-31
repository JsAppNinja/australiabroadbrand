import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class CheckButton extends Component {
  render() {
    const { CustomStyle, Content, Link } = this.props;
    return (
      <a className="custome-button" style={CustomStyle} href={Link}>
        {Content}
      </a>
    );
  }
}

CheckButton.propTypes = {
  CustomStyle: PropTypes.object,
  Content: PropTypes.string,
  Link: PropTypes.string,
};

CheckButton.defaultProps = {
  CustomStyle: {},
  Content: '',
};

export default CheckButton;
