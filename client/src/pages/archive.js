import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import DisplayCard from "../components/displayCard";

/*
 *                           Parent: Archive
 *   Parent has access to these props placeholder, data, onChange, card
 *
 *    Child: SeachBar                     Child: DisplayCard
 *  onChange prop passed from parent   Card prop passed from parent
 */

const Archive = () => {
  const [filteredAPIData, setfilteredAPIData] = useState([]); //useState for data receive from search bar
  const [searchTerm, setSearchTerm] = useState(""); //useState for key search term

  //fetch from API
  //GET request from backend, will bring data to front
  const getCardsFromAPI = async () => {
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${"vampire"}`
    ).catch((e) => {
      console.log(e, "error from fetch");
    });
    const searchResults = await response.json();
    console.log(searchResults.cards);
    setfilteredAPIData(searchResults.cards);
  };

  //logic that will send data to child, searchbar
  const handleClick = (word) => {
    //search term from search bar onchange
    console.log(word);
    //updating use state to users selected search word
    setSearchTerm(word);
  };

  console.log(filteredAPIData);
  useEffect(() => {
    if (searchTerm) {
      fetch(`https://api.magicthegathering.io/v1/cards?name=${searchTerm}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(searchTerm, result);
          setfilteredAPIData(result.cards);
        })
        .catch((e) => {
          console.log(e, "error from fetch");
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Greetings, Planeswalker!</h1>
      <h2>
        Welcome to Commanders Keep complete card archive. Here you can browse
        for all cards exclusively by name. Please make any selections necessary
        to update your collection, happy archiving!
      </h2>
      <div className="searchBar">
        <div></div>
        <SearchBar
          placeholder="Enter a Card Name..."
          data={filteredAPIData}
          onChange={handleClick} //sends data to the child component Searchbar
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridRowGap: "20px",
        }}
      >
        {filteredAPIData.map((i, index) => (
          <DisplayCard key={index} card={i} />
        ))}
      </div>
    </div>
  );
};
export default Archive;
