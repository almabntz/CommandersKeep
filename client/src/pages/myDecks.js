import React, { useEffect, useState } from "react";
import DeckDisplayCard from "../components/deckDisplayCard";
import { useAuth0 } from "@auth0/auth0-react";

const Decks = () => {
  const [myDeck, setMyDeck] = useState([]); //this will hold cards within the deck
  const { user } = useAuth0();
  //logic goes here
  //get request from DB
  const getDeck = async () => {
    const response = await fetch(`/user_deck?sub=${user.sub}`);
    const storedDeck = await response.json();
    setMyDeck(storedDeck);
  };
  useEffect(() => {
    getDeck();
  }, [myDeck]);

  //delete logic to follow later
  const deleteDeck = (deleteId) => {
    return fetch(`user_deck/${deleteId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        getDeck();
      }
    });
  };

  return (
    <div className="page-msg">
      <h1>Deck</h1>
      <h2>
        Please make any selections necessary to update your deck.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridRowGap: "20px",
        }}
      >
        {myDeck.map((myDeckCards, i) => {
          return (
            <DeckDisplayCard
              key={i}
              displayDeck={myDeckCards}
              deleteDeck={deleteDeck}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Decks;
