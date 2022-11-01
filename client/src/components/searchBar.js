import React, { useEffect, useState } from 'react';
import "./searchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {
    //use states and logic 
    const [filteredData, setFilteredData] = useState([]); //user input to search bar
    const [wordEntered, setWordEntered] = useState("");// clears key terms used in searchbar
    
    //Event handler for user typing into search bar
    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter = data.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        //hides the window that appears below the search bar if input is empty
        if (searchWord === ""){
            setFilteredData([])
        }else{
        setFilteredData(newFilter)
        }
    };

    //Event handler for clearing a search term inside the search bar
    const clearInput = () => {
       setFilteredData([]); 
    }

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                    <div className='searchIcon'>
                        {filteredData.length === 0 ? (
                             <SearchIcon/> 
                             ) : (
                                 <CloseIcon id="clearBtn" onClick={clearInput} />
                                 )}
                    
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