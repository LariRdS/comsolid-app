import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import context from '../context/context';
import authService from '../services/auth.service';

export default function Auth() {
  const {
    auth,
  } = useContext(context);

  const checkToken = () => {
    const token = authService();
    if (token) return token;
    return false;
  };

  if (!auth) {
    try {
      const user = checkToken();
      if (!user) {
        return <Navigate to="/login" />;
      }
      return <Outlet />;
    } catch (err) {
      <Navigate to="/login" />;
    }
  }
  return (
    <Outlet />
  );
}
