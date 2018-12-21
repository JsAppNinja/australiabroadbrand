import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class CheckButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { CustomStyle, Content } = this.props;
    return (
      <div className="custome-button" style={CustomStyle}>
        {Content}
      </div>
    );
  }
}

CheckButton.propTypes = {
  CustomStyle: PropTypes.object,
  Content: PropTypes.string,
};

CheckButton.defaultProps = {
  CustomStyle: {},
  Content: '',
};

export default CheckButton;
