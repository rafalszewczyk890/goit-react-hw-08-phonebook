import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppContainer } from '../AppContainer/AppContainer';
import css from '../Layout/Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.appContainer}>
      <AppContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
