import React from "react";
import { Link } from "react-router-dom";

function TwoBoxes({ isLogin }) {
  const LinktoSite = isLogin ? "./oddaj-rzeczy" : "./logowanie";

  return (
    <div className="twoBoxes">
      <Link to={LinktoSite} style={{ textDecoration: "none" }}>
        <div>
          <span>Oddaj Rzeczy</span>
        </div>
      </Link>

      <div>
        <span>Zorganizuj zbiórkę</span>
      </div>
    </div>
  );
}

export default TwoBoxes;
