import { useRef } from 'react';
import React from "react";
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { createContext } from 'react';
import Pdf from "react-to-pdf";

export const CourseContext = createContext();
const Course = () => {
    const course = useLoaderData();
    const { name, details, Intro, img_url } = course;


    const ref = React.createRef();

    return (
        <div>
            <div className='d-flex'>
                <h5>Download PDF: </h5>
                {/* <Button className='mx-2 btn-info'>Download</Button> */}
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button className='mx-2 btn-info' onClick={toPdf}>Download</Button>}
                </Pdf>
            </div>

            <div ref={ref}>
                <h2>{name}</h2>
                <p><small>{Intro}</small></p>
                <Card>
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>


                        <Card.Text>
                            {details}
                        </Card.Text>

                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default Course;