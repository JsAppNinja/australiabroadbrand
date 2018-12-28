import React from 'react';
import PropTypes from 'prop-types';
import ExCircle from '../ExCircle';
import './style.scss';

const CircleLink = ({ ImgPaths }) => (
  <div className="circle-link">
    {ImgPaths.map((item, index) => (
      <div key={index} className="circle-link__one-circle">
        <ExCircle BgImgPath={item} ChildContent={index + 1} />
      </div>
    ))}
  </div>
);

CircleLink.propTypes = {
  ImgPaths: PropTypes.array,
};

CircleLink.defaultProps = {
  ImgPaths: [],
};

export default CircleLink;
