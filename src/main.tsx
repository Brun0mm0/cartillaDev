import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages';
import CredencialesPages from './pages/credencial';
import CartillaPage from './pages/cartillas';
import { Provider } from 'react-redux';
import { store } from './store/store';


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

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </Provider>,
);
