import React, { useEffect, useState } from 'react';
import "./searchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

/**
 *    ArchievePage: data fetching/storing, filtering
 *         [data, setData] = React.useState([])
 *         [ searchTerm, setSearchTerm]
 *        when search term changes, call API with that --> setData(api results)
 * 
 *       <SearchBar onChange={()=>{setSearchTerm(e.target.value)}} cards={data}  />       <CollectionCards cards={data} />
 * 
 * 
 *   
 * 
 */
function SearchBar({placeholder, data, searchTerm, setSearchTerm, onChange}) {
    //use states and logic 
    const [filteredData, setFilteredData] = useState([]); //state for data from JSON files
    const [wordEntered, setWordEntered] = useState("");// state for term entered into search bar
    
    //Event handler for user typing into search bar 
    const handleFilter = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord);

        onChange(searchWord);
      //  console.log('calling the onchange prop in search bar, which is handleClick from the parent')
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
       setWordEntered("");
    };

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input 
                type="text" 
                placeholder={placeholder} 
                value={wordEntered} 
                onChange={handleFilter}
                />
                    <div className='searchIcon'>
                        {filteredData.length === 0 ? (
                             <SearchIcon/> 
                             ) : (
                                 <CloseIcon id="clearBtn" onClick={clearInput}/>
                                 )}
                    
                    </div>
            </div>
            { filteredData.length != 0 && (
            <div className='dataResults'>
                {filteredData.slice(0,5).map((value, key) => {
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