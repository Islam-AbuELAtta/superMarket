import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import Layout from './Component/Layout';
import Products from './Component/Products';
import Whishlist from './Component/Whishlist';
import Cart from './Component/Cart';
import Navbar from './Component/Navbar';
import Notfound from './Component/Notfound';
import Brands from './Component/Brands';
import Categories from './Component/Categories';
import ProtectedRoute from './Component/ProtectedRoute';
import NewPassword from './Component/NewPassword';
import ResetCode from './Component/ResetCode';
import ConfirmNewPassword from './Component/ConfirmNewPassword';
import ProductDetails from './Component/ProductDetails';

export default function App() {

      let routes = createBrowserRouter([{
                path: '/', element : <Layout></Layout>, children:[
                  {index: true , element: <ProtectedRoute> <Home></Home></ProtectedRoute>},
                  {path: '/home' , element: <ProtectedRoute> <Home></Home></ProtectedRoute>},
                  {path: '/newpassword' , element: <NewPassword></NewPassword> },
                  {path: '/resetcode' , element: <ResetCode></ResetCode> },
                  {path: '/confirmnewpassword' , element: <ConfirmNewPassword></ConfirmNewPassword> },
                  {path: '/login' , element: <Login></Login>},
                  {path: '/register' , element: <Register></Register>},
                  {path: '/products' , element: <ProtectedRoute><Products></Products> </ProtectedRoute> },
                  {path: '/productdetails/:id' , element: <ProtectedRoute><ProductDetails></ProductDetails> </ProtectedRoute> },
                  {path: '/categories' , element: <ProtectedRoute> <Categories></Categories> </ProtectedRoute>},
                  {path: '/whishlist' , element: <ProtectedRoute> <Whishlist></Whishlist> </ProtectedRoute>},
                  {path: '/brands' , element:<ProtectedRoute><Brands></Brands></ProtectedRoute> },
                  {path: '/cart' , element: <ProtectedRoute><Cart></Cart></ProtectedRoute>},
                  {path: '/navbar' , element:<ProtectedRoute><Navbar></Navbar></ProtectedRoute> },
                  {path: '*' , element: <Notfound></Notfound>},
                ]
              }])     
  return (
    
      <RouterProvider router={routes}>

      </RouterProvider>
  )
}
