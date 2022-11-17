import React, { useEffect, useState } from 'react';


const Decks = () => {
const [myDeck, setMyDeck] = useState([]); //this will hold cards within the deck
    //logic goes here
const getDeck = async () => {
    const response = await fetch("/user_deck");
    const storedCollection = await response.json();
    setMyCollection(storedCollection);
  };
  useEffect(() => {
    getCollection();
  }, [myCollection]);
}
    return (
        <div>
            <h1>This is my Decks</h1>
        </div>
    )
};
export default Decks;