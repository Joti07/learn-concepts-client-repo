import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { CourseContext } from '../Course/Course';
import { CoursesContext } from '../Courses/Courses';



const CheckOut = () => {
    const { user } = useContext(AuthContext);
    //const { courses } = useContext(CoursesContext);
    const [name, setName] = useState(user.displayName);
    // console.log(course);

    const handleSubmit = event => {
        event.preventDefault();

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h4>User Infromation</h4>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ID: {user.uid}</Form.Label>
                    {/* <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: {user?.email}</Form.Label>
                    {/* <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" /> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name: {name}</Form.Label>
                    {/* <Form.Control onChange={handleNameChange} defaultValue= type="text" placeholder="Name" /> */}
                </Form.Group>

            </Form>
        </div>
    );
};

export default CheckOut;