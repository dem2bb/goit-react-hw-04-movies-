import React from "react";
import { v4 as uuidv4 } from "uuid";
import notfound from "../../images/notfound.png";

const Cast = ({ casts }) => {
  return (
    <>
      <ul>
        {casts.map(({ profile_path, name, character }) => {
          const profile = `https://image.tmdb.org/t/p/w300${profile_path}`;
          return (
            <li key={uuidv4()}>
              <img
                className="cast_img"
                src={profile_path ? profile : notfound}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
