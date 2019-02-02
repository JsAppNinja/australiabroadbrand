import React, { Component } from 'react';
import { Arrow } from '../../../components/Arrow';

import HouseImg from '../../../assets/moving-checklist-house.png';
import ChecklistImg from '../../../assets/moving-checklist.png';
import './style.scss';

import Data from './Data';

class MovingChecklist extends Component {
  state = {
    isOrangeExpanded: false,
    isGreenExpanded: false,
  };
  expandCard = type => {
    const value = `is${type}Expanded`;
    this.setState({
      [value]: !this.state[value],
    });
  };
  render() {
    const { isGreenExpanded, isOrangeExpanded } = this.state;
    return (
      <section className="checklist-section">
        <article className="checklist-section__card checklist-section__card_orange">
          <img src={HouseImg} alt="" />
          <h2 className="checklist-section__header checklist-section__header_orange">
            Moving from your old home
          </h2>
          <p className="checklist-section__card_preview">
            Most people agree - moving house is a real headache! To make things
            easier, we've put together a mover's checklist so you can tick your
            moving jobs off as you go.
          </p>
          {isOrangeExpanded ? (
            <div className="checklist-section__card__content">data</div>
          ) : null}
          <div
            className="checklist-section__card__footer"
            onClick={() => this.expandCard('Orange')}
          >
            <span>{isOrangeExpanded ? 'Show less' : 'Show more'}</span>
            <div className="circle circle_orange">
              <Arrow rotate={isOrangeExpanded ? true : false} />
            </div>
          </div>
        </article>
        <article className="checklist-section__card checklist-section__card_green">
          <img src={ChecklistImg} alt="" />
          <h2 className="checklist-section__header checklist-section__header_green">
            At your new home
          </h2>
          <p className="checklist-section__card_preview">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, explicabo!
          </p>
          {isGreenExpanded ? (
            <div className="checklist-section__card__content">
              {Data.checkpoints.map((item, index) => (
                <div className="checkpoint" key={index}>
                  <Arrow />
                  <p className="checkpoint__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div
            className="checklist-section__card__footer"
            onClick={() => this.expandCard('Green')}
          >
            <span>{isGreenExpanded ? 'Show less' : 'Show more'}</span>
            <div className="circle circle_green">
              <Arrow rotate={isGreenExpanded ? true : false} />
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default MovingChecklist;
