import React, { useEffect } from 'react';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import PageNotFound from './pages/404';
import Protected from './features/auth/components/Proctected';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogOut from './features/auth/components/LogOut';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminProductDetail from './features/admin/component/AdminProductDetail';
import AdminProductFormPage from './pages/AdminProductFormPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Protected>
        <Home></Home>
      </Protected>,
  },
  {
    path: "/admin",
    element:
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>,
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
  {
    path: "/admin/product-detail/:id",
    element:
      <ProtectedAdmin>
        <AdminProductDetail></AdminProductDetail>
      </ProtectedAdmin>,
  },
  {
    path: "/admin/product-form",
    element:
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>,
  },
  {
    path: "/admin/product-form/edit/:id",
    element:
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>,
  },
  {
    path: "/order-success/:id",
    element:
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>
      </Protected>
  },
  {
    path: "/orders",
    element:
      <Protected>
        <UserOrdersPage></UserOrdersPage>
      </Protected>
  },
  {
    path: "/profile",
    element:
      <Protected>
        <UserProfilePage></UserProfilePage>
      </Protected>
  },
  {
    path: "/logout",
    element:
      <LogOut></LogOut>
  },
  {
    path: "/forgot-password",
    element:
      <ForgotPasswordPage></ForgotPasswordPage>
  },
  {
    path: "*",
    element:
      <PageNotFound></PageNotFound>,
  },
])

function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
