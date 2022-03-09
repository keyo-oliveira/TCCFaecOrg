import React, { createContext, FC, useContext, useState } from "react";
import { isEmptyObject } from "../utils/VerifyEmptyObj";
interface IUser {
  username: string;
  password: string;
}
interface LoginContextProps {
  login: (user: IUser) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

export const LoginContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function login(data: IUser) {
    if (data.username && data.password) {
      setIsLoggedIn(true);
    }
    return null;
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);

  if (isEmptyObject(context)) {
    throw new Error("useLogin must be used inside a login context");
  }
  return context;
};

export default LoginContextProvider;
