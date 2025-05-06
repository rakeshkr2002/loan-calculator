import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import About from './components/About'
import Dashboard from './components/Dashboard'

let routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "red",
          fontSize: "34px",
          fontWeight: "bold",
        }}
      >
        404 Not Found
      </div>
    ),
    children:[
      {
        path: "/",
        element: <Dashboard/>
      }
      ,
      {
        path:"/about",
        element:<About/>
      }
    ]
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
