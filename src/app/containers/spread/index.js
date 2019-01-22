import React from 'react';
import Page from '../../components/Page';
import Sharelove from './Sharelove';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="spread" title="Spread">
    <Sharelove />
    <ImpInformation />
    <Footer />
  </Page>
);
