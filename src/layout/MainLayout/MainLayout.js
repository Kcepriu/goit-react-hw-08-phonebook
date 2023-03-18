import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';

const MainLayout = () => {
  return (
    <>
      MainLayout
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
