import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ minWidth: 960}}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;