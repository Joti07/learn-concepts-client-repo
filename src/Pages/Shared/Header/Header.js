import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Learn Concepts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav.Link href="#courses">Courses</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;