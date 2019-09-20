import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../components/ErrorPage'
import Character from '../components/characters/Character';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/starwars-character" component={Character} exact></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
