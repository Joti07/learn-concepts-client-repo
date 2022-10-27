import { createBrowserRouter } from "react-router-dom";
import Course from "../../Pages/Course/Course";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Shared/Others/Profile/Profile";
import CheckOut from "../../Pages/CheckOut/CheckOut";

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
                element: <PrivateRoute><Course></Course></PrivateRoute>,
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

            },
            {
                path: '/login',
                element: <Login></Login>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/register',
                element: <Register></Register>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }


        ]
    }

])