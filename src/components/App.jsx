import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'layout/MainLayout/MainLayout';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Contacts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
