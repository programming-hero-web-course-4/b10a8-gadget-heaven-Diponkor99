import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Statics from './Component/Statistics/Statics.jsx';
import DashBoard from './Component/Dashboard/DashBoard.jsx';
import Home from './Component/Home/Home.jsx';
import CardDetiles from './Component/CardDetiles/CardDetiles.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/statistics',
        element:<Statics></Statics>
      },
      {
        path:'/Dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'cardDetiles/:product_id',
        element:<CardDetiles></CardDetiles>,
        loader:()=>fetch('../public/data.json')

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
