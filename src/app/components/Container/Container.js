import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const Container = ({ children, className, bgColor }) => (
  <div
    className={cx('section-container', className)}
    style={{
      backgroundColor: bgColor,
    }}
  >
    <div className="section-container__wrap">{children}</div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Container;
