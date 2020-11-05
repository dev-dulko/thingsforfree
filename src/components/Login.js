import React from "react";
import HomeLogin from "./Home/HomeHeader/HomeLogin";
import HomeNav from "./Home/HomeHeader/HomeNav";
import { ReactComponent as ReactDecoration } from "../assets/Decoration.svg";

function Login() {
  return (
    <div className="login">
      <HomeLogin />
      <HomeNav />
      <div className="login__title">
        <h2>Zaloguj się</h2>
        <div>
          <ReactDecoration className="login__decoration" />
        </div>
      </div>
      <div className="login__form">
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

export default Login;
