import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, PageNotFound } from '../pages';
import { Layout } from '../components';

const RouterComponent: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  </Layout>
);

export const Router = React.memo(RouterComponent);
