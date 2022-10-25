import { createBrowserRouter } from "react-router-dom";
import Course from "../../Course/Course";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import CourseInfoCard from "../../Pages/Shared/CourseInfoCard/CourseInfoCard";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses`)
                // loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
                // loader: ({ params }) => fetch(`http://localhost:5000/courses`)

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            }


        ]
    }

])