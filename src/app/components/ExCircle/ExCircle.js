import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ExCircle = ({
  ParentSize,
  ChildSize,
  ChildContent,
  ChildBgColor,
  BgImgPath,
}) => (
  <div
    className="custom-circle"
    style={{
      width: ParentSize,
      height: ParentSize,
    }}
  >
    <div
      className="custom-circle__child"
      style={{
        width: ChildSize,
        height: ChildSize,
        backgroundColor: ChildBgColor,
      }}
    >
      {ChildContent}
    </div>
    <img src={BgImgPath} alt="circle" />
  </div>
);

ExCircle.propTypes = {
  ParentSize: PropTypes.string,
  ChildSize: PropTypes.string,
  ChildContent: PropTypes.string,
  ChildBgColor: PropTypes.string,
  BgImgPath: PropTypes.string,
};

ExCircle.defaultProps = {
  ParentSize: '119px',
  ChildSize: '38px',
  ChildContent: '1',
  ChildBgColor: '#f89729',
  BgImgPath: '',
};

export default ExCircle;
