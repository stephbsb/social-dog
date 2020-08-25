import React, { useEffect } from 'react';
import { TOKEN_POST, USER_GET } from '../../api';
import Input from '../form/Input';
import Button from '../form/Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm('password');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  function getUser(token) {
    const { url, options } = USER_GET(token);
    console.log(options);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => console.log(json));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json.token) {
            localStorage.setItem('token', json.token);
            username.clearValues();
            password.clearValues();
            getUser(json.token);
          }
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='User' name='username' type='text' {...username} />
        <Input label='Password' name='password' type='password' {...password} />
        <Button>Log In</Button>
      </form>
    </section>
  );
};

export default LoginForm;
