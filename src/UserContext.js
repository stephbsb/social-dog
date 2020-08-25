import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: 'André' }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
