import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

let routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },{
    path: "/error_page",
    element: <ErrorPage />,
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
