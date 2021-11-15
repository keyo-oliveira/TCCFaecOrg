import * as React from "react";
import { useForm } from "react-hook-form";
import {
  container,
  textCentered,
  backgroundColor,
  content,
  row,
  rowButton,
  buttonRegister,
} from "../styles/login.module.scss";

const LoginPage = ({ pageTitle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <div className={backgroundColor}>
        <title>{pageTitle}</title>
        <div className={container}>
          <div className={textCentered}>
            <h1>Ferramenta de Auxílio para Emergências Civis</h1>
          </div>
          <hr />
          <div className={content}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={row}>
                <input
                  type="email"
                  placeholder="Email Ex.: Rodrigo@gmail.com"
                  {...register("email",{required:true, maxLength:30})}
                />
              </div>
              <div className={row} style={{paddingBottom: "30px"}}>
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password",{required:true,maxLength:20})}
                />
              </div>
              <hr />
              <div className={rowButton}>
                <input className={buttonRegister} type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;