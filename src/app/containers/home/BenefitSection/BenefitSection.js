import React, { Component } from 'react';
import Benefit from 'components/Benefit';
import BenefitImg1 from 'assets/svgs/benefit-1.svg';
import BenefitImg2 from 'assets/svgs/benefit-2.svg';
import BenefitImg3 from 'assets/svgs/benefit-3.svg';

import './style.scss';

class BenefitSection extends Component {
  render() {
    const Benefits = [
      {
        img: BenefitImg1,
        title: 'No contracts & unlimited data',
        desc:
          "We're generous with our data options so you can have all the data you need, when you need it.",
        color: '#f89729',
      },
      {
        img: BenefitImg2,
        title: 'Simple plans, no surprises',
        desc:
          "We're all about keeping it simple: no hidden charges or surpises on your bill. What you see is what you get.",
        color: '#4dbba6',
      },
      {
        img: BenefitImg3,
        title: 'Everything you need online',
        desc:
          "Set up, connect and manage your service with ease, all online. We're all about making it easy for you to find what you need and help yourself in your own time.",
        color: '#2c69a9',
      },
    ];

    return (
      <div className="benefit">
        <div className="benefit-blurtitle">UNLIMITED DATA</div>
        <div className="benefit-section__title">
          <div className="benefit-section__title-item">
            amazingly simple nbn<sup>TM</sup>
          </div>
          <div className="benefit-section__title-line" />
        </div>
        <div className="benefit-content">
          <ul id="links">
            {Benefits.map((item, index) => (
              <li key={index} className="items">
                <Benefit
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  color={item.color}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BenefitSection;
