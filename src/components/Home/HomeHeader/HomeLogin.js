import React from "react";
import { Link } from "react-router-dom";

export default function HomeLogin() {
  return (
    <div className="homeLogin">
      <span>
        <Link to="/logowanie">Zaloguj</Link>
      </span>
      <span>
        <Link to="/rejestracja">Załóż konto</Link>
      </span>
    </div>
  );
}
