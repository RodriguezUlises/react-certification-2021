import React, { useState, useEffect, useContext } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);

    const loggedUser = storage.get('AUTH_USER');
    setUser(loggedUser);
  }, []);

  const login = (userInfo) => {
    setAuthenticated(true);
    setUser(userInfo);
    storage.set(AUTH_STORAGE_KEY, true);
    storage.set('AUTH_USER', userInfo);
  }

  const logout = () => {
    setAuthenticated(false);
    setUser({});
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set('AUTH_USER', '');
  }

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
