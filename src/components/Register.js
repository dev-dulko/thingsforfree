import React from "react";
import HomeLogin from "./Home/HomeHeader/HomeLogin";
import { ReactComponent as ReactDecoration } from "../assets/Decoration.svg";

function Register() {
  return (
    <div className="register">
      <HomeLogin />
      {/* <HomeNav /> */}
      <div className="register__title">
        <h2>Zaloguj się</h2>
        <div>
          <ReactDecoration className="register__decoration" />
        </div>
      </div>
      <div className="register__form">
        <form>
          <label>
            <p>Email</p>
            <input type="email" />
          </label>
          <label>
            <p>Hasło</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Zaloguj</button>
            <input type="submit" value="Załóż konto" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
