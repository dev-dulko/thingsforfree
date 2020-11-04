import React from "react";
import HomeLogin from "./HomeLogin";
import HomeNav from "./HomeNav";
import TwoBoxes from "./TwoBoxes";
import Title from "./Title";
import headerPhoto from "../../../assets/Home-Hero-Image.jpg";

export default function HomeHeader() {
  return (
    <div className="homeHeader">
      <div className="homeHeader__sideLeft">
        <img
          src={headerPhoto}
          alt="things for gift"
          className="homeHeader__image"
        />
      </div>
      <div className="homeHeader__sideRight">
        <HomeLogin />
        <HomeNav />
        <Title />
        <TwoBoxes />
      </div>
    </div>
  );
}
