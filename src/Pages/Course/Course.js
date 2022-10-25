import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Course = () => {
    const course = useLoaderData();
    const { name, details, Intro, img_url } = course;
    return (
        <div>
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
    );
};

export default Course;