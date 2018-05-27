import React, { Component } from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link href="/" to="/">Hacker News</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} href="/new" to="/new">                    
                        new
                    </NavItem>
                    <NavItem eventKey={2} >
                        comments
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/show" to="/show">
                        show
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/ask" to="/ask">
                        ask
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/jobs" to="/jobs">
                        jobs
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        submit
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Login
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
