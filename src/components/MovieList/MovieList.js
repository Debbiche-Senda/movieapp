import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, filterSearch, rate }) => {
  return (
    <div className="myCard">
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(filterSearch.toLowerCase()) 
            &&
            movie.rating >= rate
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      ,
    </div>
  );
};

export default MovieList;
