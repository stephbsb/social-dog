import React, { useState, useEffect } from 'react';
import UserHeaderNav from './UserHeaderNav';

import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta':
        setTitle('Feed');
        break;
      case '/conta/statistics':
        setTitle('Statistics');
        break;
      case '/conta/post':
        setTitle('Post new photo');
        break;
      default:
        setTitle('My Space');
        break;
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
