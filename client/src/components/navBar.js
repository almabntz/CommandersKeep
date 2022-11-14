import React from "react";
import logo from "./logo.jpg";
//import Profile from "./profile"; Will be added soon
import Auth0NavBar from "../auth/nav-bar";

const NavBar = ({ setView }) => {
  //logic goes here
  //let user = props.user;

  return (
    //this data is being passed to App.js

    <div className="wrap">
      <div className="navbar-container">
        <div className="user-wrap"></div>

        <div className="logo">
          <img className="nav-img" src={logo} />
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

        <div>
          <Auth0NavBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
