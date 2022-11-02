import React, { useEffect, useState } from 'react';
// Search bar
import SearchBar from '../components/searchBar'
import CardData from "../components/default-cards2.json"
import DisplayCard from '../components/displayCard';

//here i am passing use state from search bar as props
const Archive = ({}) => {
   const [filteredData, setFilteredData] = useState([])//use state for data i receive from search bar
   const [ searchTerm, setSearchTerm] = useState("")

//fetch from API 
//GET request from backend, will bring data to front
const getCardsFromAPI = async () => {
    const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${"vampire"}`).catch(e=>{console.log(e, 'error from fetch')});
    const searchResults = await response.json();
    console.log(searchResults.cards)
    setFilteredData(searchResults.cards)
};
useEffect(() => {
    getCardsFromAPI();
}, []);

//logic that will send data to child, searchbar
const handleClickV2 = (word) =>{
    console.log(word, 'search term from search bar onchange')
    setSearchTerm(word)
}

console.log(filteredData, 'filtered data')
useEffect(()=>{
    if (searchTerm){
    fetch(`https://api.magicthegathering.io/v1/cards?name=${searchTerm}`).then(res=>{
       return res.json()})
        .then(result=>{    
            console.log(searchTerm, result, 'maybe these are filterd by search term I hope!! ');
            setFilteredData(result.cards)
        })
    .catch(e=>{console.log(e, 'error from fetch')});
    }
}, [searchTerm])

    return (
        <div>
              <div className= "searchBar">
        <SearchBar 
        placeholder= "Enter a Card Name..." 
        data={filteredData} 
        onChange={handleClickV2}//sends data to the child component Searchbar 
        />
        </div>
            <h1>This is where full list of cards can be browsed</h1>
            {filteredData.map(i=><DisplayCard card={i} />)}
        </div>
    )
};
export default Archive;




    //incoming data from searchbar component
   

//heres where i'll get my cards from my JSON file
//const getArchiveCards = filteredData.map


