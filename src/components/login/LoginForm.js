import React, { useContext } from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../helper/Error';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext);
  const username = useForm();
  const password = useForm('password');

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
    </section>
  );
};

export default LoginForm;
