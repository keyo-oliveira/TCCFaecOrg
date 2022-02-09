import React, { createContext, useContext } from "react";
import useStorage from "../utils/useStorage";

export const loginContext = createContext({
  token: null,
  setToken: () => {},
});

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useStorage("token");

  function login(data) {
    console.log("data", data);
    if (data.username && data.password) {
      return { token: data.userName };
      
    }
    console.log(token)
    setIsLoggedIn(token);
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
  return useContext(loginContext);
};
