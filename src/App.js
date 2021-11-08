import React,{useState} from "react";
import "./App.css";
import { data } from "./data";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";
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
      {  console.log(rate)}
      <NavBar setMovies={getNewMovie} movies={movies} setFilterSearch={setFilterSearch} setRate={setRate}/>
      <MovieList movies={movies} filterSearch={filterSearch} rate={rate}/>
    </div>
  );
}

export default App;
