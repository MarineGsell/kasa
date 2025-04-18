import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Rent from './pages/Rent'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'location/:id',
        element: <Rent />,
      },
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
