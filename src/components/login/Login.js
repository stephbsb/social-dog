import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginReset from './LoginReset';
import LoginForgot from './LoginForgot';
import UserContext from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);
  if (login === true) return <Navigate to='/conta' />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/create'>
            <LoginCreate />
          </Route>
          <Route path='/resetpassword'>
            <LoginReset />
          </Route>
          <Route path='/forgotpassword'>
            <LoginForgot />
          </Route>
          <Route path='/'>
            <LoginForm />
          </Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
