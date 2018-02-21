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
          <a href="/brochure">React Hacker News</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/top">
          Top Stories
        </NavItem>
        <NavItem eventKey={2} href="/new">
          New Stories
        </NavItem>
        <NavItem eventKey={3} href="/best">
          Best Stories
        </NavItem>
      </Nav>
    </Navbar>;
}

export default Sitenavbar;