import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../components/ErrorPage'
import Planets from '../components/planets/';
import Starships from '../components/starships/';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/planets" component={Planets} exact></Route>
        <Route path="/starships" component={Starships} exact></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
