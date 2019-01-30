import React from 'react';
import Page from '../../components/Page';
import AboutHello from './AboutHello';
// import AboutWhy from './AboutWhy';
import AboutLock from './AboutLock';
import Pick from './Pick';
import NbnHelp from './NbnHelp';
import ImpInformation from './ImpInformation';
import Footer from '../footer';
import Container from '../../components/Container';
import './style.scss';

export default () => (
  <Page id="about" title="About" description="This is about really cool stuff.">
    <Container bgColor="#f6f9ff">
      <AboutHello />
    </Container>
    {/* <Container>
      <AboutWhy />
    </Container> */}
    <Container bgColor="#f6f9ff">
      <AboutLock />
    </Container>
    <Container>
      <Pick />
    </Container>
    <Container bgColor="#f6f9ff">
      <NbnHelp />
    </Container>
    <Container bgColor="#e7edfa">
      <ImpInformation />
    </Container>
    <Container>
      <Footer />
    </Container>
  </Page>
);
