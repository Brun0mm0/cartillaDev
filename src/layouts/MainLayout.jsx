import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import HomePage  from '../pages/HomePage';
import CartillaPage  from '../pages/CartillaPage';
import CredencialPage  from '../pages/CredencialPage';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Home',
    title: 'Home',
    icon: <DashboardIcon />,
    path: '/',
  },
  {
    segment: 'Cartilla',
    title: 'Cartilla',
    icon: <ShoppingCartIcon />,
    path: '/cartilla',
  },
  {
    kind: 'divider',
  },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  // {
  //   segment: 'reports',
  //   title: 'Reports',
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: 'sales',
  //       title: 'Sales',
  //       icon: <DescriptionIcon />,
  //     },
  //     {
  //       segment: 'traffic',
  //       title: 'Traffic',
  //       icon: <DescriptionIcon />,
  //     },
  //   ],
  // },
  // {
  //   segment: 'integrations',
  //   title: 'Integrations',
  //   icon: <LayersIcon />,
  // },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

export default function MainLayout(props) {
  const { window } = props;

  // const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  // const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      // router={router}
      theme={demoTheme}
      // window={demoWindow}
    >
      <Router>
      <DashboardLayout>
        <PageContainer>
          <Routes>
            <Route exact path='/Home' component={ <HomePage /> }/>
            <Route path='/cartilla' component={ <CartillaPage /> }/>
            <Route path='/credencial' component={ <CredencialPage /> }/>
          </Routes>
        </PageContainer>
      </DashboardLayout>
      </Router>
    </AppProvider>
  );
}