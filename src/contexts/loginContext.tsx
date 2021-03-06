import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { isEmptyObject } from "../utils/VerifyEmptyObj";
import { navigate } from "gatsby";
import Cookies from "js-cookie";
import { getLoginService } from "../services/login";

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

export const LoginContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => setIsLoggedIn(Cookies.get("login-context") || ""), []);

  useEffect(() => {
    Cookies.set("login-context", isLoggedIn, { expires: 7 });
  }, [isLoggedIn]);

  async function login(data: IUser) {
    const loginData = true;
    if (loginData === true) {
      return Cookies.set("login-context", "logged-in", { expires: 7 });
    }
    return null;
  }

  function logout() {
    Cookies.remove("login-context");
    return navigate("/");
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
