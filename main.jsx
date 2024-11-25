import { Children } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './src/components/App'
import Home from './src/components/Home'
import Browse from './src/components/Browse'
import Addbooks from './src/components/Addbooks'
import Wishlist from './src/components/Wishlist'
import Genre from './src/components/Genre'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }, {
        path: '/genre/:genre',
        element: <Genre/>
      }, {
        path: '/browse',
        element: <Browse/>
      }, {
        path: '/addbooks',
        element: <Addbooks/>
      }, {
        path: '/wishlist',
        element: <Wishlist/>
      }
    ]}
])

const root = createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)