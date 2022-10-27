import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            {/* <h4>All Category: {courses.length}</h4> */}


            {
                courses.map(course =>
                    // <p key={course.id}>
                    //     <Link to={`/course/${course.id}`}>{course.name}</Link></p>
                    <>

                        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                            activeKey="/home"
                        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                        >
                            <div className="sidebar-sticky"></div>
                            <Nav.Item>
                                <Nav.Link key={course.id} href={`/course/${course.id}`}>{course.name}</Nav.Link>
                            </Nav.Item>

                        </Nav>

                    </>







                )
            }

        </div>
    );
};

export default LeftSideNav;