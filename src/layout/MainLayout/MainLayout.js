import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';

import { Container } from './MainLayout.styled';
import Footer from 'components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Container>
        <Footer />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MainLayout;
