import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '../../../../components/Arrow';
import AnimateHeight from 'react-animate-height';

import './style.scss';

class Dropdown extends Component {
  state = {
    isOpened: false,
  };
  expandDropdown = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };
  createMarkup(index) {
    return { __html: this.props.data.item.questions[index].answer };
  }
  render() {
    const { mainQuestion, mainAnswer, questions } = this.props.data.item;
    const { isOpened } = this.state;
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
            <p>{mainAnswer ? mainAnswer : null}</p>
            {questions
              ? questions.map((item, index) => (
                  <Fragment key={index}>
                    <p className="question">
                      {item.question ? item.question : null}
                    </p>
                    <p
                      className="answer"
                      dangerouslySetInnerHTML={this.createMarkup(index)}
                    />
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
