import React from "react";
import "./Search.css";


const Search = ({setFilterSearch}) => {
  return (
    <div class="box">
      <form name="search">
        <input
          type="text"
          class="input"
          name="txt"
          onmouseout="document.search.txt.value = ''"
          onChange={(e)=> setFilterSearch(e.target.value)} 
          placeholder = "Search"
        />
      </form>
      <i class="fas fa-search"></i>
    </div>
  );
};

export default Search;
