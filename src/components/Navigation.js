import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul>
        <NavLink to={"/"}>
          <li>acceuil</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
