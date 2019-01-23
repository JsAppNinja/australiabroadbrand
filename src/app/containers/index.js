import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import AuthenticatedRoute from "../components/authenticated-route";
import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Home = Loadable({
  loader: () => import('./home'),
  loading: () => null,
  modules: ['home'],
});

const NbnExplained = Loadable({
  loader: () => import('./nbn-explained'),
  loading: () => null,
  modules: ['nbn-explained'],
});

const Login = Loadable({
  loader: () => import('./login'),
  loading: () => null,
  modules: ['login'],
});

const About = Loadable({
  loader: () => import('./about'),
  loading: () => null,
  modules: ['about'],
});

const Moving = Loadable({
  loader: () => import('./moving'),
  loading: () => null,
  modules: ['moving'],
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nbn-explained" component={NbnExplained} />
    <Route exact path="/moving-nbn" component={Moving} />

    <Route exact path="/about" component={About} />
    <UnauthenticatedRoute exact path="/login" component={Login} />
    {/* <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={NotFound} />
  </Switch>
);
