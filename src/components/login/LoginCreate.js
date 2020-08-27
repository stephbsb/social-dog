import React, { useContext } from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import Error from '../helper/Error';
import useForm from '../../hooks/useForm';
import { USER_POST } from '../../api';

import UserContext from '../../UserContext';
import useFetch from '../../hooks/useFetch';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <Input label='User' type='text' name='username' {...username} />
        <Input label='Email' type='text' name='email' {...email} />
        <Input label='Password' type='text' name='password' {...password} />
        {loading ? (
          <Button disabled>Signing you up...</Button>
        ) : (
          <Button>Sign up!</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
