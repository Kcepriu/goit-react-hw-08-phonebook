import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'layout/MainLayout/MainLayout';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'reduxe/auth/operation';
import Spinner from './Spinner/Spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

const App = () => {
  const dispatch = useDispatch();

  const { isRefresing, isError, textError } = useAuth();
  useEffect(() => {
    if (isError) {
      Notify.failure(textError, { timeout: 1000 });
    }
  }, [isError, textError]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
