import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Proctected';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Protected>
        <Home></Home>
      </Protected>,
  },
  {
    path: "/login",
    element:
      <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element:
      <Protected>
        <CartPage></CartPage>
      </Protected>,
  },
  {
    path: "/checkout",
    element:
      <Protected>
        <Checkout></Checkout>
      </Protected>,
  },
  {
    path: "/product-detail/:id",
    element:
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
