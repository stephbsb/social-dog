import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import useMedia from '../../hooks/useMedia';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as Statistics } from '../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../assets/adicionar.svg';
import { ReactComponent as LogOut } from '../../assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem');
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to='/conta' end activeClassName={styles.active}>
          <MyPhotos />
          {mobile && 'Feed'}
        </NavLink>
        <NavLink to='/conta/statistics' activeClassName={styles.active}>
          <Statistics />
          {mobile && 'Statistics'}
        </NavLink>
        <NavLink to='/conta/post' activeClassName={styles.active}>
          <AddPhoto />
          {mobile && 'New'}
        </NavLink>
        <button onClick={userLogout}>
          <LogOut />
          {mobile && 'Log Out'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
