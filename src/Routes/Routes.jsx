import React from 'react';

import {
  createBrowserRouter,

} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blog/Blogs';
import LawyerDetails from '../Components/LawyerDetails/LawyerDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        loader: ()=> fetch('Lawyer.json'),
        path: '/',
        Component: Home
      },
      {
        path:"/my-bookings",
        Component: MyBookings,
      },
      {
        path: 'blogs',
        Component: Blogs,
      },
      {
        path: '/lawyerdetails/:id',
        loader: ()=> fetch('Lawyer.json'),
        Component: LawyerDetails
      }
    ]
  },
]);