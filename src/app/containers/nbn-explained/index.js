import React from 'react';
import Page from '../../components/Page';
import NbnConcept from './NbnConcept';
import NbnTypes from './NbnTypes';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="nbn-explained">
    <NbnConcept />
    <NbnTypes />
    <ImpInformation />
    <Footer />
  </Page>
);
