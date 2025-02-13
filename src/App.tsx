import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BadgeIcon from '@mui/icons-material/Badge';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import type { Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Apps',
  },
  {
    title: 'Apps',
    icon: <DashboardIcon />,
  },
  {
    segment: 'credenciales',
    title: 'Credenciales',
    icon: <BadgeIcon />,
  },
  {
    segment: 'cartillas',
    title: 'Cartillas',
    icon: <MedicalServicesIcon />,
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
