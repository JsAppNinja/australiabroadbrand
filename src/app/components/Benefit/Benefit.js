import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Benefit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { img, title, desc, color } = this.props;

    return (
      <div className="benefit-item">
        <div className="benfit-item__image">
          <img src={img} alt="Benefit" />
        </div>
        <div
          className="benfit-item__title"
          style={{
            color: color,
          }}
        >
          {title}
        </div>
        <div className="benfit-item__desc">{desc}</div>
      </div>
    );
  }
}

Benefit.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  color: PropTypes.string,
};

Benefit.defaultProps = {
  img: '',
  title: '',
  desc: '',
  color: '',
};

export default Benefit;
