import React, { createContext, useState, useEffect } from 'react';
import fetchProfile from '../services/api/fetchProfile';
import Token from '../utils/Token';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(props.token);
  const [currentUser, setCurrentUser] = useState({});

  localStorage.setItem('token', token);

  // preload for authenticated User
  useEffect(() => {
    if (Token.isValid(token)) {
      fetchProfile().then(setCurrentUser);
    }
  }, []);

  const logout = () => {
    setToken('');
    // @TODO: callLogout() method sends DELETE to /logout
    window.location = '/login';
  };

  const isGuest = () => !Token.isValid(token);

  return <AuthContext.Provider value={{ token, logout, isGuest, currentUser }}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
