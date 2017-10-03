import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Server Side React</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default NavBar;
