import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Learn Concepts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ marginRight: '400px' }}>

                        <Nav.Link href="courses">Courses</Nav.Link>
                        <Nav.Link href="blogs">Blogs</Nav.Link>
                        <Nav.Link href="faq">FAQ</Nav.Link>
                    </Nav>

                    <Nav >
                        <Nav.Link>{user?.displayName}</Nav.Link>
                        <Nav.Link>
                            {user.photoURL ?
                                <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image> :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;