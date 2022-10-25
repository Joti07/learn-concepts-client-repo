import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                //  loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },


        ]
    }

])