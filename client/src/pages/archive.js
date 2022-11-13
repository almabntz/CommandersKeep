import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import DisplayCard from "../components/displayCard";
import AddCollection from "../components/addCollection";

/*
 *                           Parent: Archive
 *   Parent has access to these props placeholder, data, onChange, card
 *
 *    Child: SeachBar                     Child: DisplayCard
 *  onChange prop passed from parent   Card prop passed from parent
 */

const Archive = ({}) => {
  const [filteredAPIData, setfilteredAPIData] = useState([]); //useState for data receive from search bar
  const [searchTerm, setSearchTerm] = useState(""); //useState for key search term

  //NEW CODE MIGHT BREAK PROJECT VVV
  const [currentCollection, setCurrentCollection] = useState([]); //useState for users card collection

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



  //NEW CODE MIGHT BREAK PROJECT VVV
  const sendToCollection = (archiveCard) => {
    //creates a copy of current collection of cards and updates it to add the new selected card
    const newToCollection = [...currentCollection, archiveCard];
    //updates useState so that new card is in currentCollection array
    setCurrentCollection(newToCollection);
    console.log(currentCollection);
  };


  
  return (
    <div>
      <div className="searchBar">
        <SearchBar
          placeholder="Enter a Card Name..."
          data={filteredAPIData}
          onChange={handleClick} //sends data to the child component Searchbar
        />
      </div>
      <h1>This is where full list of cards can be browsed</h1>
      {filteredAPIData.map((i) => (
        <DisplayCard
          card={i}
          addButton={AddCollection}
          handleAddClick={sendToCollection}
        />
      ))}
      {/* <DisplayCard
        addButton={AddCollection}
        handleAddClick={sendToCollection}
        card={currentCollection}
      /> */}
      <h1>COLLECTION TEST CARD</h1>
    </div>
  );
};
export default Archive;
