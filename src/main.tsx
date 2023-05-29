import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App.tsx'
import './index.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sorteio from './pages/Sorteio.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import GereSorteio from './pages/GereSorteio.tsx'
import Sortear from './pages/Sortear.tsx'
import CotasUser from './pages/CotasUser.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "/",
        element: <GereSorteio/>,
      },
      {
        path: "/sorteio",
        element: <Sorteio/>,
      },
      {
        path: "/sortear",
        element: <Sortear/>,
      },
      {
        path: "/sorteio",
        element: <Sorteio/>,
      },{
        path: "/cotasUser",
        element: <CotasUser/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
