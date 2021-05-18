import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
  </Switch>
);
