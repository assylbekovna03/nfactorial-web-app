import "./header.scss";
import Login from "../authorization/login";
import Register from "../authorization/register";
import { ModuleLogin, ModuleRegister } from "../module/modules";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <nav className="header-wrapper-nav nav">
            <a className="nav-links" href="#">
              Студенты
            </a>
            <a className="nav-links" href="#">
              Работадатели
            </a>
          </nav>
          <div className="header-wrapper-auth">
            <button
              className="btn mr-2 btn-login"
              onClick={() => setLogin(true)}
            >
              Войти
            </button>
            <button
              className="btn btn-register"
              onClick={() => setRegister(true)}
            >
              Регистрироваться
            </button>
          </div>
        </div>
      </header>
      <header className="header1">
        <div className="header1-wrapper">
          <nav className="header1-wrapper-nav nav">
            <a className="nav-links mr-2" href="#">
              Главная
            </a>
            <a className="nav-links mr-2" href="#">
              Как это работает
            </a>
            <a className="nav-links mr-2" href="#">
              Советы по карьере
            </a>
          </nav>
        </div>
      </header>
      <ModuleLogin open={login} isClose={() => setLogin(false)}>
        <Login />
      </ModuleLogin>
      <ModuleRegister open={register} isClose={() => setRegister(false)}>
        <Register />
      </ModuleRegister>
    </>
  );
};

export default Header;
