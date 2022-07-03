import "./login.scss";
import { Routes, Route, Link } from "react-router-dom";

const universities = [
  "Университет имени Сулеймана Демирель",
  "Казахстанско-Британский технический университет",
  "Назарбаев Университет",
  "Казахский национальный университет имени аль-Фараби",
  "Евразийский национальный университет имени Л.Н. Гумилева",
  "Казахская национальная академия искусств имени Т. Жургенова",
  "Казахский национальный исследовательский технический университет им.К.И. Сатпаева",
];

const Login = () => {
  return (
    <>
      <div className="form-container">
        <h1>Войти</h1>
        <p>
          <b>Студенты</b>(KZ 🇰🇿)
        </p>
        <label for="univer">
          Пожалуйста, выберите свой университет для входа
        </label>
        <select name="select" id="univer">
          {universities.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label for="email">Пожалуйста, напишите свою почту для входа</label>
        <input type="text" placeholder="email@example.edu" />
        Пароль
        <input type="password" placeholder="password" required />
        <button class="btn-login">Вход</button>
        <p>
          Если нет аккаунта, нажмите <Link to="/register">здесь</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
