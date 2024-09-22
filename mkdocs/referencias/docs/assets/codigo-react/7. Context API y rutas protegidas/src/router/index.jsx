import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import LayoutPublic from '../layouts/LayoutPublic'
import LayoutPrivate from '../layouts/LayoutPrivate'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
])
