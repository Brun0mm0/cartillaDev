import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages';
import CredencialesPages from './pages/credencial';
import CartillaPage from './pages/cartillas';


const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'credenciales',
            Component: CredencialesPages,
          },
          {
            path: 'cartillas',
            Component: CartillaPage,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
