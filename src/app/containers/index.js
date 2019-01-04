import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import AuthenticatedRoute from "../components/authenticated-route";
import UnauthenticatedRoute from 'components/unauthenticated-route';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Home = Loadable({
  loader: () => import('./home'),
  loading: () => null,
  modules: ['home'],
});

const Login = Loadable({
  loader: () => import('./login'),
  loading: () => null,
  modules: ['login'],
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ './about'),
  loading: () => null,
  modules: ['about'],
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />

    <UnauthenticatedRoute exact path="/login" component={Login} />
    {/* <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={NotFound} />
  </Switch>
);
