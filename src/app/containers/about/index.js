import React from 'react';
import Page from '../../components/Page';
import AboutHello from './AboutHello';
import AboutWhy from './AboutWhy';
import Pick from './Pick';
import NbnHelp from './NbnHelp';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="about" title="About" description="This is about really cool stuff.">
    <AboutHello />
    <AboutWhy />
    <Pick />
    <NbnHelp />
    <ImpInformation />
    <Footer />
  </Page>
);
