import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import Products from './views/Products/Products.jsx';
import Pay from './views/Pay/Pay.jsx';
import { PRODUCTS_MOCK } from "../src/mock/products.mock.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
