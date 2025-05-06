import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import About from './components/About'
import Dashboard from './components/Dashboard'
import { ThemeCurrencyProvider } from './Context-api/ThemeCurrencyContext'
import ExchangeRates from './components/ExchangeRates'

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
      },
      {
        path:"exchange_rates_live",
        element:<ExchangeRates/>
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
      <ThemeCurrencyProvider>
      <RouterProvider router={routes} />
      </ThemeCurrencyProvider>
    </div>
  )
}

export default App
