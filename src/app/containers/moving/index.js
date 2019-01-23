import React, { Component } from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import CustomerTypes from './CustomerTypes';
import EasyConnection from './EasyConnection';
import Information from '../home/ImpInformation';
import CheckAddress from '../home/CheckAddress';
import ReviewSection from '../home/ReviewSection';
import MovingPlaces from './MovingPlaces';
import Footer from '../footer';
import './style.scss';

export default class Moving extends Component {
  state = {
    type: '',
  };
  toggleSteps = type => {
    this.setState({ type });
  };
  render() {
    const { type } = this.state.type;
    let connection;
    if (type !== undefined && type !== '') {
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
        <CustomerTypes toggleSteps={this.toggleSteps} />
        {connection}
        <ReviewSection />
        <MovingPlaces />
        <Information />
        <Footer />
      </Page>
    );
  }
}
