import React from 'react';
import Page from '../../components/Page';
import sharelove from './sharelove';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="spread" title="Spread">
    <sharelove />
    <ImpInformation />
    <Footer />
  </Page>
);
