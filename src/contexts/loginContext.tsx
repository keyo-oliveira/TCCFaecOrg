import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { isEmptyObject } from "../utils/VerifyEmptyObj";
import Cookies from "js-cookie";
import { navigate } from "gatsby";
interface IUser {
  username: string;
  password: string;
}
interface LoginContextProps {
  login: (user: IUser) => void;
  logout: () => void;
  isLoggedIn: string;
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

export const LoginContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => setIsLoggedIn(Cookies.get("login-context") || ""), []);

  useEffect(() => {
    Cookies.set("login-context", isLoggedIn, { expires: 7 });
  }, [isLoggedIn]);

  function login(data: IUser) {
    if (data.username && data.password) {
      navigate("/");

      return Cookies.set("login-context", "logged-in", { expires: 7 });
    }
    return null;
  }

  function logout() {
    navigate("/");

    return Cookies.remove("login-context");
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
