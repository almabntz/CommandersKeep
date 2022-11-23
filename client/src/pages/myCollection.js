import React, { useEffect, useState } from "react";
import SavedDisplayCard from "../components/savedDisplayCard";
import { useAuth0 } from "@auth0/auth0-react";
/*
 *   Parent: Collection
 *    props displayCollection and deleteCard is being passed from
 *    collection to savedDisplayCard
 *
 *    Child: savedDisplayCard
 *
 */
const Collection = ({ sendToCollection, currentCollection }) => {
  const [myCollection, setMyCollection] = useState([]); //This will hold users collection of cards
  const { user } = useAuth0();
  //fetch from DB, Get request
  const getCollection = async () => {
    const response = await fetch(`/user_collection?sub=${user.sub}`);
    const storedCollection = await response.json();
    setMyCollection(storedCollection);
  };
  useEffect(() => {
    getCollection();
  }, [myCollection]);

  //Delete handle logic, removes cards from my collection
  const deleteCard = (deleteCardId) => {
    return fetch(`user_collection/${deleteCardId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        getCollection();
      }
    });
  };

  return (
    <div className="page-msg">
      <h1>Collection</h1>
      <h2>
        Please make any selections necessary to update your collection, or send
        cards to your deck.
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridRowGap: "20px",
        }}
      >
        {myCollection.map((myCards, i) => {
          return (
            <SavedDisplayCard
              key={i}
              displayCollection={myCards}
              deleteCard={deleteCard}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Collection;
