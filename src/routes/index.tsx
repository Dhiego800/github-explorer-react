import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../pages/Dashbaord'
import '../pages/Repository'
import Dashboard from '../pages/Dashbaord';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/" component={Repository} />
  </Switch>
);

export default Routes;  