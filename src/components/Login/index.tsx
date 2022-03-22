import * as React from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import { useLogin } from "../../contexts/loginContext";
import { navigate } from "gatsby";

import "./styles.scss";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useLogin();
  const onSubmit = (data: any) => {
    login(data);
    navigate("/");
  };

  return (
    <main className="login__main">
      <div className="login__container">
        <div className="login__header">
          <span className="login__header-title">Login</span>
        </div>
        <div>
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="login__input"
              type="string"
              placeholder="Usuário"
              {...register("username", { required: true, maxLength: 30 })}
            />
            <input
              className="login__input"
              type="password"
              placeholder="Senha"
              {...register("password", { required: true, maxLength: 20 })}
            />
            <input
              className="login__submit-button"
              type="submit"
              value="Entrar"
            />
            <div className="login__register-container">
              <span>Não tem cadastro?</span>
              <Link
                className="login__register-button"
                type="submit"
                to="/register"
              >
                Cadastre-se aqui
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
