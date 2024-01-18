import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Browse from './Browse';
import SignUp from '../pages/SignUp';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/signup',
            element: <SignUp />
        }
    ]);

    return (
        <RouterProvider router={appRouter}>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/signup" element={<SignUp />} />
        </RouterProvider>
    );
};

export default Body;
