import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MovieList = ({ movies, location }) => {
  return (
    <ul className="homepage-cont">
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: {
                from: location,
              },
            }}
            className="NavLink"
          >
            {title ? title : name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
