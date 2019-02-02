import React, { Component } from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import CustomerTypes from './CustomerTypes';
import EasyConnection from './EasyConnection';
import Information from '../home/ImpInformation';
import CheckAddress from '../home/CheckAddress';
import ReviewSection from '../home/ReviewSection';
import MovingPlaces from './MovingPlaces';
import MovingChecklist from './MovingChecklist';
import CantFindAnswer from './CantFindAnswer';
import NbnHelp from '../about/NbnHelp';
import Footer from '../footer';
import './style.scss';

export default class Moving extends Component {
  state = {
    type: 'new-customer',
  };
  toggleSteps = type => {
    this.setState(prevState => {
      const newType = prevState.type === type ? null : type;
      return { type: newType };
    });
  };

  render() {
    const { type } = this.state;
    let connection;
    if (type !== null) {
      connection = (
        <div className="connection-check__section">
          <div className="connection-top__hidden" />
          <EasyConnection stepsType={type} />
          <CheckAddress />
          <div className="connection-down__hidden" />
        </div>
      );
    } else {
      connection = null;
    }
    return (
      <Page id="moving">
        <HeroSection />
        <CustomerTypes toggleSteps={this.toggleSteps} activeType={type} />
        {connection}
        <ReviewSection />
        <MovingPlaces />
        <MovingChecklist />
        <CantFindAnswer />
        <NbnHelp />
        <Information />
        <Footer />
      </Page>
    );
  }
}
