import React from 'react';
import Page from '../../components/Page';
import Sharelove from './Sharelove';
import Startshare from './Startshare';
import Whyshare from './Whyshare';
import Payback from './Payback';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import Container from '../../components/Container';
import './style.scss';

export default () => (
  <Page id="spread" title="Spread">
    <Container bgColor="#f6f9ff">
      <Sharelove />
    </Container>
    <Container>
      <Startshare />
    </Container>
    <Container bgColor="#f6f9ff">
      <Whyshare />
    </Container>
    <Container>
      <Payback />
    </Container>
    <Container bgColor="#e7edfa">
      <ImpInformation />
    </Container>
    <Container>
      <Footer />
    </Container>
  </Page>
);
