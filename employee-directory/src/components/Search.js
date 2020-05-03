import React from "react";


function Search(props) {
  return (
    <div className = "searchBar" id ="searchDiv">
    <input className="form-control" type="text" placeholder="Search Employee" aria-label="Search"></input>
    </div>
  );
}

export default Search;