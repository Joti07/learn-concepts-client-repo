import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    console.log(user)
    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>

                <Image
                    style={{ height: '40px', width: '40px', marginRight: '20px' }}
                    // roundedCircle
                    src="https://files.123freevectors.com/wp-content/uploads/freevectorimage/learning-concept-free-vector-3506.jpg">
                </Image>
                <Navbar.Brand href="/">Learn Concepts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ marginRight: '400px' }}>

                        <Nav.Link href="courses">Courses</Nav.Link>
                        <Nav.Link href="blogs">Blogs</Nav.Link>
                        <Nav.Link href="faq">FAQ</Nav.Link>


                    </Nav>

                    <Nav>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        <Button variant="light" > <Link to='/checkout'>Premium</Link></Button>
                                    </>
                                    :
                                    <>
                                        <Button className="border-0  ms-1" variant="outline-secondary">  <Link to='/login'>Login</Link> </Button>
                                        <Button className="border rounded ms-1" variant="outline-secondary">  <Link to='/register'>Register</Link> </Button>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?

                                <Image
                                    data-toggle="tooltip"
                                    title={user?.displayName}
                                    style={{ height: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }


                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;