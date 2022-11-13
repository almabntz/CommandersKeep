import React, { useEffect, useState } from "react";
//import DisplayCard from "../components/displayCard";
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

const Collection = ({sendToCollection,currentCollection}) => {
  const [myCollection, setMyCollection] = useState([]); //This will hold users collection of cards

  //fetch from DB, Get request
const getCollection = async () => {
    const response = await fetch()
}


  return (
    <div>
      <div>
      This is my collection
      </div>
    </div>
  );
};
export default Collection;
