import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <ul className="homeNav">
      <li>
        <Link to="/">Start</Link>
      </li>
      <li>
        <a href="#">O co chodzi?</a>
      </li>
      <li>
        <a href="#">O nas</a>
      </li>
      <li>
        <a href="#">Fundacja i organizacja</a>
      </li>
      <li>
        <a href="#">Kontakt</a>
      </li>
    </ul>
  );
}

export default HomeNav;
