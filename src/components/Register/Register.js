import React from "react";
import HomeLogin from "../Home/HomeHeader/HomeLogin";
import HomeNav from "../Home/HomeHeader/HomeNav";
import { ReactComponent as ReactDecoration } from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="register__nav">
        <HomeLogin />
        <HomeNav />
      </div>

      <div className="register__title">
        <h2>Załóż konto</h2>
        <div>
          <ReactDecoration className="register__decoration" />
        </div>
      </div>
      <div className="register__form">
        <form>
          <div className="register__form__input">
            <label>
              <p>Email</p>
              <input type="email" />
            </label>
            <label>
              <p>Hasło</p>
              <input type="password" />
            </label>
            <label>
              <p>Powtórz Hasło</p>
              <input type="password" />
            </label>
          </div>
          <div className="register__button">
            <Link to="/logowanie">
              <input type="submit" value="Zaloguj" />
            </Link>
            <input type="submit" value="Załóż konto" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
