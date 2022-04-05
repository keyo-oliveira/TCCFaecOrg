interface IUser {
    username: string;
    password: string;
  }
  interface LoginContextProps {
    login: (user: IUser) => void;
    logout: () => void;
    isLoggedIn: string;
  }