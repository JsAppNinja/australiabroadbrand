import React from 'react';
import Page from '../../components/Page';
import Pick from './Pick';
import NbnHelp from './NbnHelp';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import './style.scss';

export default () => (
  <Page id="about" title="About" description="This is about really cool stuff.">
    <Pick />
    <NbnHelp />
    <ImpInformation />
    <Footer />
  </Page>
);
