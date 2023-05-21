import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={null}>
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
        <Outlet />
      </Suspense>
    </div>
  );
};
