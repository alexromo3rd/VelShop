import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={SignUp} />
    <Route path='/login' component={Login} />
    <Route path='/logout' component={Logout} />
    <Route path='/profile/:id' component={Profile} />
    <Route path='/shop' component={Shop} />
    <Route path='/products/:id' component={ProductDetails} />
    <Route path='/cart/:id?' component={Cart} />
  </Switch>
);
