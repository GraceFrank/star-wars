import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../components/ErrorPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
