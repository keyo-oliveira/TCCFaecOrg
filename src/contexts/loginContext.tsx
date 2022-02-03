import React, { createContext, useContext, useState } from "react";

export const loginContext = createContext({});

type credentials = {
  userName: string;
  passWord: string;
};

export function LoginContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  function login(data: credentials) {
    console.log("data", data);
    setIsLoggedIn(true);
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
      }}
    >
      {children}
    </loginContext.Provider>
  );
}

export const useLogin = () => {
  return useContext(loginContext);
};
