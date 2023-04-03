import React, { useState } from "react";
import { BsFillPinMapFill } from "react-icons/bs";
import { HiMagnifyingGlass } from "react-icons/hi2";

import './Search.styles.css';

const Search = ({ onSearchPlace }) => {
  const [placeName, setPlaceName] = useState('');

  return (
    <div className="app__search">
      <div className="app__search-icon">
        <BsFillPinMapFill />
      </div>
      <div className="app__search-input">
        <input
          type="text"
          placeholder="Enter Your Location"
          onChange={(event) => setPlaceName(event.target.value)}
        />
      </div>
      <div className="app__search-button">
        <button type="button" onClick={() => onSearchPlace(placeName)}>
          <HiMagnifyingGlass />
        </button>
      </div>
    </div>
  );
};

export default Search;