import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ExCircle extends Component {
  render() {
    return <div className="custom-circle">Test Values</div>;
  }
}

ExCircle.propTypes = {
  ParentSize: PropTypes.string,
  ChildSize: PropTypes.string,
  ChildContent: PropTypes.string,
  ChildBgColor: PropTypes.string,
  BgImgPath: PropTypes.string,
};

ExCircle.defaultProps = {
  ParentSize: '119',
  ChildSize: '38',
  ChildContent: '1',
  ChildBgColor: '#f89729',
  BgImgPath: '',
};

export default ExCircle;
