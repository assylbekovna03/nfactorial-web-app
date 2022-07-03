import "./register.scss";
import { Routes, Route, Link } from "react-router-dom";
const Register = () => {
  const universities = [
    "Университет имени Сулеймана Демирель",
    "Казахстанско-Британский технический университет",
    "Назарбаев Университет",
    "Казахский национальный университет имени аль-Фараби",
    "Евразийский национальный университет имени Л.Н. Гумилева",
    "Казахская национальная академия искусств имени Т. Жургенова",
    "Казахский национальный исследовательский технический университет им.К.И. Сатпаева",
  ];
  return (
    <>
      <div className="form-container">
        <h1>Давай, найдем тебе работу</h1>
        <p>
          Подключайся к StudJob сообщество студентов, университетов,
          работадателей чтобы найти стажировки, вакансии и еще большее. Начни с
          создания бесплатного аккаунта за несколько шагов.
        </p>
        <label for="univer">
          Пожалуйста, выберите свой университет для регистрации
        </label>
        <select name="select" id="univer">
          {universities.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label for="email">
          Пожалуйста, напишите свою почту для регистрации
        </label>
        <input type="text" placeholder="email@example.edu" required />
        Придумайте пароль
        <input type="password" placeholder="password" required />
        Повторите пароль
        <input type="password" placeholder="password" required />
        <button class="btn-login">Вход</button>
        <p>
          Если нет аккаунта, нажмите <a href="#">здесь</a>
        </p>
      </div>
    </>
  );
};

export default Register;
