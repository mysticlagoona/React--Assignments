import React, { Component } from 'react';
import './Header.css';
import logo from './image/y18.gif';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

  


function Header() {
    return ( 
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">Hacker News</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
    new
    </NavItem>
    <NavItem eventKey={2} href="#">
    comments
    </NavItem>
    <NavItem eventKey={3} href="#">
    show
    </NavItem>
    <NavItem eventKey={4} href="#">
    ask
    </NavItem>
    <NavItem eventKey={5} href="#">
    jobs
    </NavItem>
    <NavItem eventKey={6} href="#">
    submitm
    </NavItem>
  </Nav>
</Navbar>

  );
}
export default Header;