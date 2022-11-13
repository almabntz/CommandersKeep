import React, { useEffect, useState } from "react";
import SavedDisplayCard from "../components/savedDisplayCard";
//import bodyParser from "body-parser";
//import AddCollection from "../components/addCollection";
/*
 *   Parent: Collection
 *
 *
 *
 *
 *    Child: DisplayCard
 *
 */
const Collection = ({ sendToCollection, currentCollection }) => {
  const [myCollection, setMyCollection] = useState([]); //This will hold users collection of cards
  const [updateCollection, setUpdateCollection] = useState({
    user_id: "",
    id: "",
    name: "",
    manaCost: "",
    originalText: "",
    cmc: "",
    imageUrl: ""
  }); 

  //fetch from DB, Get request
  const getCollection = async () => {
    const response = await fetch("http://localhost:8080/user_collection");
    const storedCollection = await response.json();
    setMyCollection(storedCollection);
  };
  useEffect(() => {
    getCollection();
  }, [myCollection]);

  //Post to DB table user_collection
  const addNewCard = async (updateCollection) => {
    console.log(updateCollection)
    const response = await fetch ("http://localhost:8080/user_collection",{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify( updateCollection),
  })
const data = await response.json ();
console.log(data);
getCollection();
}
  

  return (
    <div>
      <div>
        {myCollection.map((myCards, i) => {
          return <SavedDisplayCard displayCollection = {myCards} />;
        })}
        This is my collection
      </div>
    </div>
  );
};
export default Collection;
//displayCollection={myCards}
//key={index} 