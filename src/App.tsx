import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import type { Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Apps',
  },
  {
    title: 'Cartillas',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Credenciales',
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: 'Obra Social Servicios Sociales Bancarios Dashboard',
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
