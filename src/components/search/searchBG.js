import React from 'react';
import SearchBar from './searchBar';


import '../../App.css';

function SearchBG(props) {
  return (
    <div className="search-bg">
    <SearchBar changeFilter={props.changeFilter}/>
  
    </div>
  );
}

export default SearchBG;
