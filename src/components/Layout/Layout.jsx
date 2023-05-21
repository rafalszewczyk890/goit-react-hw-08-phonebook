import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppContainer } from '../AppContainer/AppContainer';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
