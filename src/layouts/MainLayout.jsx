import { extendTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { HomePage, CartillaPage, CredencialPage } from '../pages';


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
    segment: 'Credencial',
    title: 'Credencial',
    icon: <ShoppingCartIcon />,
    path: '/credencial',
  },
  {
    kind: 'divider',
  },
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


export default function MainLayout() {

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
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