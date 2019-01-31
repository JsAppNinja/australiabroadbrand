import React, { Component } from 'react';
import { AnswerCard } from './AnswerCard';
import CheckButton from '../../../components/CheckButton';
import Data from './Data';

import QuestionSign from '../../../assets/question-sign.png';
import RightArrow from '../../../assets/arrow-to-right.png';
import './style.scss';

const customStyle = {
  width: '230px',
  height: '45px',
  backgroundColor: '#67cebb',
  color: '#ffffff',
  borderRadius: '22.5px',
  fontSize: '18px',
};

class CantFindAnswer extends Component {
  render() {
    return (
      <div className="answer-section">
        <div className="answer-section__left">
          <div className="cards">
            <AnswerCard type="big">
              <div className="card-header">
                <img src={RightArrow} alt="arrow" />
                <span>Answer</span>
              </div>
              {Data[0].desc.map((item, index) => (
                <p key={item}>{item}</p>
              ))}
            </AnswerCard>
            <AnswerCard type="small">
              <div className="circle">
                <img src={QuestionSign} alt="question" />
              </div>
              <p>{Data[1].desc}</p>
            </AnswerCard>
          </div>
        </div>
        <div className="answer-section__right">
          <h2>Can't find the answer you're looking for?</h2>
          <h2> Don't worry we're here to help!</h2>
          <div className="answer-section__right-text">
            <p>
              Visit our 24/7 Help &amp; Support Centre. You'll find useful
              articles,
            </p>
            <p>
              how to guides, answers to FAQs and lots of helpful information.
            </p>
          </div>
          <CheckButton
            CustomStyle={customStyle}
            Content={'Support Centre'}
            Link={'https://www.australiabroadband.net.au/help/'}
          />
        </div>
      </div>
    );
  }
}

export default CantFindAnswer;
