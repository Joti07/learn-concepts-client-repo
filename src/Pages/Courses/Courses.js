import React from 'react';
import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfoCard from '../Shared/CourseInfoCard/CourseInfoCard';
export const CoursesContext = createContext();
const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>All Courses</h2>
            <br />
            {

                courses.map(course => <CourseInfoCard
                    key={course.id}
                    course={course}
                ></CourseInfoCard>)
            }

        </div>
    );
};

export default Courses;