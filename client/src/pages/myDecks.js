import React, { useEffect, useState } from "react";
import DeckDisplayCard from "../components/deckDisplayCard";
import { useAuth0 } from "@auth0/auth0-react";
/*
 *   Parent: Deck
 *    props displayDeck and deleteDeck is being passed from
 *    deck to deckDisplayCard
 *
 *    Child: deckDisplayCard
 *
 */
const Decks = () => {
  const [myDeck, setMyDeck] = useState([]); //this will hold cards within the deck
  const { user } = useAuth0();
  //get request from DB
  const getDeck = async () => {
    //Added user.sub to swap out auth0 user_id with postgres user_id in backend
    const response = await fetch(`/user_deck?sub=${user.sub}`);
    const storedDeck = await response.json();
    setMyDeck(storedDeck);
  };
  useEffect(() => {
    getDeck();
  }, [myDeck]);

  //delete logic for removing cards from mydeck
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
      <h2>Please make any selections necessary to update your deck.</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
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
