import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Grid, Row, Col
} from 'react-bootstrap';

import NavBar from './NavBar'
import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <Grid>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Grid>
);

export default App;
