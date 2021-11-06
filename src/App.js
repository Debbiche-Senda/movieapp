import React,{useState} from "react";
import "./App.css";
import { data } from "./data";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";
// import Search from "./components/Filter/Search";


function App() {
  let [movies, setMovies] = useState(data);
  const [filterSearch, setFilterSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <NavBar setMovies={setMovies} movies={movies} setFilterSearch={setFilterSearch} setRate={setRate}/>
      <MovieList movies={movies} filterSearch={filterSearch} rate={rate}/>
    </div>
  );
}

export default App;
