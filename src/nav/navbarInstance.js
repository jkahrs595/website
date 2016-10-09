import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
        <NavItem eventKey={2} href="#">Projects</NavItem>
        <NavItem eventKey={3} href="#">About Me</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Github</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavbarInstance;
