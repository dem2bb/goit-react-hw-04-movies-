import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MovieList = ({ movies, location, query }) => {
  return (
    <ul className="homepage-cont">
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: {
                from: location.pathname,
                query,
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
