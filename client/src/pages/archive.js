import React, { useEffect, useState } from 'react';
// Search bar
import SearchBar from '../components/searchBar'
import CardData from "../components/default-cards.json"

const Archive = () => {
    //logic goes here
// const [filteredData, setFilteredData] = useState([]);


//fetch from API 
//GET request from backend, will bring data to front
// const getCardsFromAPI = async () => {
//     const response await fetch ("http://localhost:8080/api/cards")
//}

    return (
        <div>
              <div className= "searchBar">
        <SearchBar placeholder= "Enter a Card Name..." data= {CardData} />
        </div>
            <h1>This where full list of cards can be browsed</h1>
        </div>
    )
};
export default Archive;