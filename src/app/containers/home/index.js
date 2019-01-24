import React from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import CheckAddress from './CheckAddress';
import Information from './ImpInformation';
import ReviewSection from './ReviewSection';
import Footer from '../footer';
import EasyConnection from './EasyConnection';
import Container from '../../components/Container';

import './style.scss';

export default () => (
  <Page id="homepage">
    <Container bgColor="#67cebb">
      <HeroSection />
    </Container>
    <BenefitSection />
    <div className="connection-check__section">
      <div className="connection-top__hidden" />
      <EasyConnection />
      <CheckAddress />
      <div className="connection-down__hidden" />
    </div>
    <ReviewSection />
    <Information />
    <Footer />
  </Page>
);
