import React from 'react';
import Page from '../../components/Page';
import NbnConcept from './NbnConcept';
import NbnTypes from './NbnTypes';
import ReadyInstall from './ReadyInstall';
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
    <ReadyInstall />
    <Install />
    <Pick />
    <NbnHelp />
    <ImpInformation />
    <Footer />
  </Page>
);
