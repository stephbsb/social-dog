import React, { useContext } from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../form/Button.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext);
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label='User' name='username' type='text' {...username} />
        <Input label='Password' name='password' type='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Log In</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to='/login/forgotpassword'>
        Forgot your password?
      </Link>

      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Create an account</h2>
        <Link className={stylesBtn.button} to='/login/create'>
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
