import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Nav.css';

export class NavbarInstance extends React.Component {
  render(){
    return(
      <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Justin Kahrs</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Test</NavItem>
        <NavItem eventKey={3} href="#">About Me</NavItem>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/projects">
          <NavItem eventKey={1}>Projects</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavbarInstance;
