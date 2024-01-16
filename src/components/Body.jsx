import React from 'react'

import Login from '../pages/Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/browse',
            element: <Browse></Browse>
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter}>
                <Login></Login>
                <Browse></Browse>
            </RouterProvider>

        </div>
    )
}

export default Body
