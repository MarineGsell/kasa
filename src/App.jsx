import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router'
import Home from './pages/Home'
import Rent from './pages/Rent'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Layout /></div>,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: "location/:id",
        element: <Rent />
      }
    ]
  },
])

function App() {

  return <RouterProvider router={router} />
}

export default App
