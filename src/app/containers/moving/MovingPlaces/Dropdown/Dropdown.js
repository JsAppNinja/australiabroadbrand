import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../../../../components/Arrow';
import AnimateHeight from 'react-animate-height';

import './style.scss';

class Dropdown extends Component {
  render() {
    const { mainQuestion, mainAnswer, questions } = this.props.data.item;
    const { itemIdx, openedDropdownIdx } = this.props.data;
    const isCurrentOpened = openedDropdownIdx === itemIdx;
    return (
      <div className="dropdown">
        <div
          className="dropdown__button"
          onClick={() => this.props.expandDropdown(itemIdx)}
        >
          <p className="dropdown__button__main-question">{mainQuestion}</p>
          <div className="dropdown__button__circle">
            <Arrow rotate={isCurrentOpened ? true : false} />
          </div>
        </div>
        <AnimateHeight duration={500} height={isCurrentOpened ? 'auto' : 0}>
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
  expandDropdown: PropTypes.func.isRequired,
};

export default Dropdown;
