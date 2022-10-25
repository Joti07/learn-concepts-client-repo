import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfoCard from '../Shared/CourseInfoCard/CourseInfoCard';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses.name)
    return (
        <div>
            <h2>Courses: {courses.length}</h2>
            {
                courses.map(course => <CourseInfoCard
                    key={course.id}
                    course={course}
                ></CourseInfoCard>)
            }
        </div>
    );
};

export default Home;