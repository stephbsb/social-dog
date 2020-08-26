import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginForgot from './LoginForgot';
import UserContext from '../../UserContext';

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to='/conta' />;
  return (
    <div>
      <Routes>
        <Route path='/create'>
          <LoginCreate />
        </Route>
        <Route path='/reset'>
          <LoginReset />
        </Route>
        <Route path='/forgot'>
          <LoginForgot />
        </Route>
        <Route path='/'>
          <LoginForm />
        </Route>
      </Routes>
    </div>
  );
};

export default Login;
