import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div>This is layout</div>
      <Outlet />
    </div>
  );
};
