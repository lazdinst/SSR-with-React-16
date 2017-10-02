import React from 'react';
import {
  Grid, Row, Col
} from 'react-bootstrap';

import NavBar from './NavBar'

const App = () => [
  <NavBar key="nav" />,
  <Grid key="main" >
    <Row>
      <Col style={{textAlign: 'center'}} smOffset={5} sm={2}>
        Hello React
      </Col>
    </Row>
  </Grid>
];

export default App;
