import React from 'react';
import Page from '../../components/Page';
import NbnConcept from './NbnConcept';
import NbnTypes from './NbnTypes';
import NbnCo from './NbnCo';
import ReadyInstall from './ReadyInstall';
import Install from './Install';
import Pick from './Pick';
import NbnHelp from './NbnHelp';
// import ImpInformation from './ImpInformation';
import Footer from '../footer';
import Container from '../../components/Container';
import './style.scss';

export default () => (
  <Page id="nbn-explained">
    <Container>
      <NbnConcept />
    </Container>
    <Container>
      <NbnTypes />
    </Container>
    <Container>
      <NbnCo />
    </Container>
    <Container>
      <ReadyInstall />
    </Container>
    <Container>
      <Install />
    </Container>
    <Container>
      <Pick />
    </Container>
    <Container>
      <NbnHelp />
    </Container>
    <Container bgColor="#e7edfa">{/* <ImpInformation /> */}</Container>
    <Container>
      <Footer />
    </Container>
  </Page>
);
