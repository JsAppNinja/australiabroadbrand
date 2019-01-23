import React from 'react';
import Page from '../../components/Page';
import Sharelove from './Sharelove';
import Startshare from './Startshare';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="spread" title="Spread">
    <Sharelove />
    <Startshare />
    <ImpInformation />
    <Footer />
  </Page>
);
