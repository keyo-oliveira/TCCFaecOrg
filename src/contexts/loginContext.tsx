import React, { createContext, useContext, useState } from "react";

interface LoginContext {
  login: any;
  logout: any;
  isLoggedIn: any;
  setIsLoggedIn: any;
}
export const loginContext = createContext<LoginContext | null>(null);

export function LoginContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(data: any) {
    if (data.username && data.password) {
      setIsLoggedIn(true);
    }
    return null;
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <loginContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </loginContext.Provider>
  );
}

export const useLogin = () => {
  const context = useContext(loginContext);
  return context;
};

export default LoginContextProvider;
