import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Dynamic from './pages/Dynamic'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
      },
      {
        path:"/shop/:slug?",
        element:<Shop/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/dynamic/:id",
        element:<Dynamic/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}
