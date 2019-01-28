import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../../../../components/Arrow';
import AnimateHeight from 'react-animate-height';

import './style.scss';

class Dropdown extends Component {
  state = {
    isOpened: false,
  };
  expandDropdown = item => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };
  render() {
    const { isOpened } = this.state;
    const { mainQuestion, mainAnswer, questions } = this.props.data;
    return (
      <div className="dropdown">
        <div className="dropdown__button" onClick={this.expandDropdown}>
          <p className="dropdown__button__main-question">{mainQuestion}</p>
          <div className="dropdown__button__circle">
            <Arrow rotate={isOpened ? true : false} />
          </div>
        </div>
        <AnimateHeight duration={500} height={isOpened ? 'auto' : 0}>
          <section className="dropdown__content">
            <p>{mainAnswer}</p>
            {questions
              ? questions.map((item, index) => (
                  <Fragment key={index}>
                    <p>{item.question}</p>
                    <p>{item.answer}</p>
                  </Fragment>
                ))
              : null}
          </section>
        </AnimateHeight>
      </div>
    );
  }
}

Dropdown.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Dropdown;
