import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from './MainLayout.styled';
import Footer from 'components/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectIsError, selectTextError } from 'reduxe/auth/selectors';

const MainLayout = () => {
  const isError = useSelector(selectIsError);
  const textError = useSelector(selectTextError);

  useEffect(() => {
    if (isError) {
      Notify.failure(textError, { timeout: 1000 });
    }
  }, [isError, textError]);

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
