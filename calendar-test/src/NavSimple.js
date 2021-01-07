import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';


class NavSimple extends React.Component{
    
    render(){
        return(
            <div>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/calendar">RC4 Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/calendar">Calendar</Nav.Link>
                        <Nav.Link href="/create">Create Event</Nav.Link>
                        <Nav.Link href="#">Login</Nav.Link>
                        <Nav.Link href="#">Link Tree</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            </div>
            

            
            
        )
    }
}

export default NavSimple