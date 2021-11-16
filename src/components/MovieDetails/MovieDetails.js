import React, { useState, useEffect } from "react";

const MovieDetails = ({ match, movies }) => {
  console.log(match);

  const [film, setFilm] = useState({});

  const findFilm = () => {
    setFilm(movies.find((el) => el.id === match.params.id))
  };

  useEffect(() => {
    findFilm();
  },[]);

  return (
    <div>
        <h3>{film.description}</h3>
        <img src={film.posterUrl} alt="" />

      {/* <button onClick={findFilm}> </button> */}
    </div>
  );
};

export default MovieDetails;
