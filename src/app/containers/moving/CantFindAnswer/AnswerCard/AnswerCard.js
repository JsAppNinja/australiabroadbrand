import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class AnswerCard extends Component {
  render() {
    const { children, type } = this.props;
    return <div className={`card ${type}`}>{children}</div>;
  }
}

AnswerCard.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};

export default AnswerCard;
