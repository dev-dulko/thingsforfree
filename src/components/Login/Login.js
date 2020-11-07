import React from "react";
import HomeLogin from "../Home/HomeHeader/HomeLogin";
import HomeNav from "../Home/HomeHeader/HomeNav";
import { Link } from "react-router-dom";
import { ReactComponent as ReactDecoration } from "../../assets/Decoration.svg";

// function Login() {
//   return (
//     <div className="login">
//       <div className="login__nav">
//         <HomeLogin />
//         <HomeNav />
//       </div>

//       <div className="login__title">
//         <h2>Zaloguj się</h2>
//         <div>
//           <ReactDecoration className="login__decoration" />
//         </div>
//       </div>
//       <div className="login__form">
//         <form>
//           <label>
//             <p>Email</p>
//             <input type="email" />
//           </label>
//           <label>
//             <p>Hasło</p>
//             <input type="password" />
//           </label>
//           <div>
//             <button type="submit">Zaloguj</button>
//             <input type="submit" value="Załóż konto" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

function Login() {
  return (
    <div className="login">
      <div className="login__nav">
        <HomeLogin />
        <HomeNav />
      </div>

      <div className="login__title">
        <h2>Zaloguj</h2>
        <div>
          <ReactDecoration className="login__decoration" />
        </div>
      </div>
      <div className="login__form">
        <form>
          <div className="login__form__input">
            <label>
              <p>Email</p>
              <input type="email" />
            </label>
            <label>
              <p>Hasło</p>
              <input type="password" />
            </label>
          </div>
          <div className="login__button">
            <input type="submit" value="Zaloguj" />
            <Link to="/rejestracja">
              <input type="submit" value="Załóż konto" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
