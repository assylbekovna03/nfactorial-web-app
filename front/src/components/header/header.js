import "../../App.css";
import "../module/modules.css";
import "./header.css";
import Login from "../authorization/login";
import { ModuleLogin } from "../module/modules";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="header_inner">
            <div className="main">
              <ol>
                <li>
                  <a href="#">Студенты</a>
                </li>
                <li>
                  <a href="#">Работадатели</a>
                </li>
              </ol>
            </div>
            <div className="auth">
              <ol>
                <li>
                  <button class="log" onClick={() => setLogin(true)}>
                    Войти
                  </button>
                </li>
                <li>
                  <button class="log">Регистрироваться</button>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </header>
      <ModuleLogin open={login} isClose={() => setLogin(false)}>
        <Login />
      </ModuleLogin>
    </>
  );
};

export default Header;
