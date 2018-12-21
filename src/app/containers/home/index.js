import React from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import CheckAddress from './CheckAddress';

export default () => (
  <Page id="homepage">
    <HeroSection />
    <BenefitSection />
    <CheckAddress />
  </Page>
);
