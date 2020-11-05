import React, { useState } from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import SimplySteps from "./SimplySteps";
import AboutUs from "./AboutUs";
import WhoHelp from "./WhoHelp";
import Footer from "./Footer";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="home">
      <HomeHeader isLogin={isLogin} />
      <ThreeColumns />
      {/* <SimplySteps /> */}
      {/* <AboutUs /> */}
      {/* <WhoHelp /> */}
      {/* <Footer /> */}
    </div>
  );
}
