import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

class Description extends Component {
  render() {
    const { title, content, link, number, colors } = this.props;
    return (
      <div className="type-description">
        <div
          className="type-description__main"
          style={{
            backgroundColor: colors[0],
          }}
        >
          <div className="type-description__main-title">{title}</div>
          <div className="type=description__main-content">{content}</div>
          <Link
            to={link}
            style={{
              fontColor: colors[1],
            }}
          >
            more info -->
          </Link>
        </div>
        <div className="type-description__number">
          <div
            className="type-description__number-content"
            style={{
              backgroundColor: colors[2],
            }}
          >
            {number}
          </div>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
  number: PropTypes.string,
  colors: PropTypes.array,
};

Description.defaultProps = {
  title: '',
  content: '',
  link: '/',
  number: '1',
};

export default Description;
