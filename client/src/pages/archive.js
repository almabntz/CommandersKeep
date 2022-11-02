import React, { useEffect, useState } from 'react';
// Search bar
import SearchBar from '../components/searchBar'
import CardData from "../components/default-cards.json"
import displayCard from '../components/displayCard';

//here i am passing use state from search bar as props
const Archive = ({filteredData,setFilteredData}) => {
    const [filteredResults, setFilteredResults] = useState([]) //use state for data i receive from search bar


//fetch from API 
//GET request from backend, will bring data to front
const getCardsFromAPI = async () => {
    const response = await fetch ("http://localhost:8080/api/cards");
    const searchResults = await response.json ();
    setFilteredResults(searchResults)
};
useEffect(() => {
    getCardsFromAPI();
}, [filteredResults]);

    return (
        <div>
              <div className= "searchBar">
        <SearchBar placeholder= "Enter a Card Name..." data= {CardData} />
        </div>
            <h1>This is where full list of cards can be browsed</h1>
        </div>
    )
};
export default Archive;




    //incoming data from searchbar component
   

//heres where i'll get my cards from my JSON file
//const getArchiveCards = filteredData.map


