import React from "react";
import "./Search.css";


const Search = ({setFilterSearch}) => {
  return (
    <div className="box">
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
      
    </div>
  );
};

export default Search;
