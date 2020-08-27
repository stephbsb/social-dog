import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as Statistics } from '../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../assets/adicionar.svg';
import { ReactComponent as LogOut } from '../../assets/sair.svg';

import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);

  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
