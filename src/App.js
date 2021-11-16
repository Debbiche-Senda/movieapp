import React, { useState } from "react";
import "./App.css";
import { data } from "./data";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
// import AddMovie from "./components/AddMovie/AddMovie";
// import Search from "./components/Filter/Search";

function App() {
  const [movies, setMovies] = useState(data);
  const [filterSearch, setFilterSearch] = useState("");
  const [rate, setRate] = useState(0);

  function getNewMovie(t) {
    setMovies(t);
  }

  return (
    <div className="App">
      <NavBar
        setMovies={getNewMovie}
        movies={movies}
        setFilterSearch={setFilterSearch}
        setRate={setRate}
      />

      <Route
        exact
        path="/"
        render={() => (
          <MovieList movies={movies} filterSearch={filterSearch} rate={rate} />
        )}
      />
      <Route
        exact
        path="/moviedetails/:id"
        render={(defaultProps) => <MovieDetails movies={movies} {...defaultProps} />}
        
      />
    </div>
  );
}

export default App;
