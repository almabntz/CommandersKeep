import React, { useEffect, useState } from 'react';
import "./searchBar.css";
import SearchIcon from '@mui/icons-material/Search';


function SearchBar({placeholder, data}) {
    //use states and logic 
    const [filteredData, setFilteredData] = useState([]);
    //Event handler for user typing into search bar
    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = data.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === ""){
            setFilteredData([])
        }else{
        setFilteredData(newFilter)
        }
    };

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                    <div className='searchIcon'>
                    <SearchIcon/>
                    </div>
            </div>
            { filteredData.length != 0 && (
            <div className='dataResults'>
                {filteredData.slice(0,15).map((value, key) => {
                    return  <div>
                        <p>{value.name}</p>
                        </div>;
                })}
            </div>
)} 
        </div>
    ) 
}

export default SearchBar;