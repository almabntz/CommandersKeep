import React, { useEffect, useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data, onChange }) {
  const [filteredData, setFilteredData] = useState([]); //state for data from JSON files
  const [wordEntered, setWordEntered] = useState(""); // state for term entered into search bar

  //Event handler for user typing into search bar
  const handleFilter = (e) => {
    const keySearchWord = e.target.value;
    setWordEntered(keySearchWord);
    onChange(keySearchWord);
    //  console.log('calling the onchange prop inside search bar, which is handleClick from the parent')
    const filteredSearch = data.filter((value) => {
      return value.name.toLowerCase().includes(keySearchWord.toLowerCase());
    });
    //clears array of data that appears below searchbar
    if (keySearchWord === "") {
      setFilteredData([]);
    } else {
      /*updates useState from an empty array to filtered data that contains the
            users input value*/
      setFilteredData(filteredSearch);
    }
  };

  //Event handler for clearing a search term inside the search bar
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResults">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div>
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
