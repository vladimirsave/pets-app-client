import React from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import AppContext from './context/AppContext';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AppContext);
  console.log('is token', token);
  // return currentUser ? children : <Navigate to = '/login'></Navigate>;
  return token ? children : <Navigate to='/login'></Navigate>;
};

export default PrivateRoute