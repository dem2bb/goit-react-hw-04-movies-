import React from "react";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBar;
