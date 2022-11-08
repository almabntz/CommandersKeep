import React from "react";
import logo from "./logo.jpg"
// Search bar
//import SearchBar from "./searchBar";
//import CardData from "./default-cards.json"

const NavBar = ({setView}) => {
    //logic goes here

    return(
        //this data is being passed to App.js

        <div className="wrap">

       

        <div className="navbar-container">
          
         <div className="user-wrap">
        </div>

     

          <div className="logo">
          <img className="nav-img" src={logo}/>
          <h1>Commanders Keep</h1>
          </div>

          <div className="navbar-btn" onClick={() => setView("home")}>
            <h2>Home</h2>
          </div>
        
          <div className="navbar-btn" onClick={() => setView("myCollection")}>
            <h2>My Collection</h2>
          </div>

          <div className="navbar-btn" onClick={() => setView("myDecks")}>
            <h2>My Decks</h2>
          </div>

          <div className="navbar-btn" onClick={() => setView("archive")}>
            <h2>Archive</h2>
          </div>
          
        </div>
        </div>
    )
}

export default NavBar;