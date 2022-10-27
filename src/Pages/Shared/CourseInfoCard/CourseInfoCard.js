import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';
const CourseInfoCard = ({ course }) => {
    const { id, name, Intro, rating, level, img_url } = course;
    console.log(course)
    return (
        <div>
            <Card className='mb-5'>
                <Card.Img variant="top" src={img_url} style={{ height: '20em' }} />
                <Card.Body>
                    <Card.Title>{name}  </Card.Title>
                    <Card.Text>
                        {Intro}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/course/${id}`}>
                            <Button className='d-flex ' variant="muted">See More</Button>
                        </Link>

                    </div>
                </Card.Body>

                <Card.Footer >
                    <div className='d-flex justify-content-between'>
                        <p><FaStar></FaStar> {rating}</p>
                        <p>{level}-Course</p>
                    </div>

                </Card.Footer>

            </Card>

        </div>
    );
};

export default CourseInfoCard;