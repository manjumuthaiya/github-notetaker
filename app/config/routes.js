import React from 'react';
import Router from 'react-router';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

module.exports = (
  <Route path="/" component = {Main}>
    <Route path="/profile/:username" component= {Profile}/>
    <IndexRoute component= {Home} />
  </Route>
);