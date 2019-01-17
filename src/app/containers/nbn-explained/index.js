import React from 'react';
import Page from '../../components/Page';
import NbnConcept from './NbnConcept';
import NbnTypes from './NbnTypes';
import Install from './Install';
import Pick from './Pick';
import NbnHelp from './NbnHelp';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="nbn-explained">
    <NbnConcept />
    <NbnTypes />
    <Install />
    <Pick />
    <NbnHelp />
    <ImpInformation />
    <Footer />
  </Page>
);
