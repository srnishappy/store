import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import History from '../pages/user/History';
import Checkout from '../pages/Checkout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Layout from '../pages/layouts/Layout';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import Dashboard from '../pages/admin/Dashboard';
import Category from '../pages/admin/Category';
import Product from '../pages/admin/Product';
import LayoutUser from '../pages/layouts/LayoutUser';
import Manage from '../pages/admin/Manage';
import HomeUser from '../pages/user/HomeUser';
import ProtectRouteUser from './ProtectRouteUser';
import ProtectRouteAdmin from './ProtectRouteAdmin';
import EditProduct from '../pages/admin/EditProduct';
import Payment from '../pages/user/Payment';
import ManageOrder from '../pages/admin/ManageOrder';
import ChangePassword from '../pages/auth/ChangePassword';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'change-password', element: <ChangePassword /> },
      ],
    },
    {
      path: '/admin',
      element: <ProtectRouteAdmin element={<LayoutAdmin />} />,
      children: [
        { index: true, element: <Manage /> },
        { path: 'category', element: <Category /> },
        { path: 'product', element: <Product /> },
        { path: 'product/:id', element: <EditProduct /> },
        { path: 'manage', element: <Manage /> },
        { path: 'order', element: <ManageOrder /> },
      ],
    },
    {
      path: '/user',
      // element: <LayoutUser />,
      element: <ProtectRouteUser element={<LayoutUser />} />,
      children: [
        {
          index: true,
          element: <HomeUser />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        { path: 'history', element: <History /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default AppRoutes;
