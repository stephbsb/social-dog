import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { UserContext } from '../UserContext';
import Button from './form/Button';

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to='/' className={styles.logo} aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link to='/conta' className={styles.login}>
              {data.email}
            </Link>
          </>
        ) : (
          <Link to='/login' className={styles.login}>
            Login / Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
