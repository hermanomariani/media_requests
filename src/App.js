import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from './Routes/Home';
import ProductPage from './Routes/ProductPage';
//import Category from './Routes/Category';
//import Cart from './Routes/Cart';
//import Payment from './Routes/Payment';
import LP from './Routes/LP';
//import ThankYouPage from './Routes/ThankYouPage';
//import { getProduct, getProductList } from './Helpers/Fetch';
import GTM from "./Assets/GTM";

const router = createBrowserRouter([
  /*{
    path: "/",
    element: <Home/>,
    loader: getProductList
  },
  {
    path: "/products/:id",
    element: <ProductPage/>,
    loader: getProduct
  }*/,
  {
    path: "/",
    element: <LP/>,
    basename:"/media-requests"
  }

])

function App() {
  return  (<>
  <GTM/>
  <RouterProvider router={router}/>
  </>)
}

export default App;

