import React, { useState, useEffect, useCallback } from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function getUser(token) {
    const { url, options } = USER_GET(token);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLogin(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const userLogout = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  function userLogin(username, password) {
    setError(null);
    setLoading(true);
    const { url, options } = TOKEN_POST({ username, password });
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: Invalid User!`);
        }
        return response.json();
      })
      .then(({ token }) => {
        window.localStorage.setItem('token', token);
        getUser(token);
        navigate('/conta');
      })
      .catch((error) => {
        setError(error.message);
        setLogin(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        fetch(url, options)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Invalid Token');
            }
            getUser(token);
            setLogin(true);
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
            userLogout();
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ data, userLogin, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
