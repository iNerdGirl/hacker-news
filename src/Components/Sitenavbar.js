import React from 'react';
import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';

const Sitenavbar = () => {
  return <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React Hacker News</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Top Stories
        </NavItem>
        <NavItem eventKey={2} href="#">
          New Stories
        </NavItem>
        <NavItem eventKey={3} href="#">
          Best Stories
        </NavItem>
      </Nav>
    </Navbar>;
}

export default Sitenavbar;