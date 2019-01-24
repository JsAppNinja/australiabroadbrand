import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const Container = ({ children, className, bgColor, borderBottom }) => (
  <div
    className={cx('section-container', className)}
    style={{
      backgroundColor: bgColor,
      borderBottom: borderBottom,
    }}
  >
    <div className="section-container__wrap">{children}</div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  borderBottom: PropTypes.string,
};

export default Container;
