import React from 'react';
import Page from '../../components/Page';
import HeroSection from './HeroSection';
import BenefitSection from './BenefitSection';
import CheckAddress from './CheckAddress';
import Information from './ImpInformation';
import ReviewSection from './ReviewSection';
import Footer from './footer';
import EasyConnection from './EasyConnection';

export default () => (
  <Page id="homepage">
    <HeroSection />
    <BenefitSection />
    <EasyConnection />
    <CheckAddress />
    <ReviewSection />
    <Information />
    <Footer />
  </Page>
);
