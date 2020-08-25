import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginForgot from './LoginForgot';

const Login = () => {
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
