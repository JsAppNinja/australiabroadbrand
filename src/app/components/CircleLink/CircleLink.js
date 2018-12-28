import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CircleLink = ({ ImgPaths }) => <div className="circle-link">Test</div>;

CircleLink.propTypes = {
  ImgPaths: PropTypes.array,
};

CircleLink.defaultProps = {
  ImgPaths: [],
};

export default CircleLink;
