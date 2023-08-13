import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <UserContext.Provider value={{ userData, setUserData,isLoggedin, setIsLoggedin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};