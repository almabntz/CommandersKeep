import React from "react";
import logo from "./logo.png";
//import Profile from "./profile";
import Auth0NavBar from "../auth/nav-bar";

const NavBar = ({ setView }) => {
  //logic goes here
  //let user = props.user;

  return (
    //this data is being passed to App.js

    <div className="wrap">
      <div className="logo-wrap">
        <img className="logo" src={logo} />
      </div>
      <div className="navbar-container">
        <div className="user-wrap"></div>
        <div className="nav-links">
          <div className="navbar-btn" onClick={() => setView("myCollection")}>
            <h2>My Collection</h2>
          </div>

          <div className="navbar-btn" onClick={() => setView("myDecks")}>
            <h2>My Decks</h2>
          </div>

          <div className="navbar-btn" onClick={() => setView("archive")}>
            <h2>Archive</h2>
          </div>

          <div className="log-out">
            <Auth0NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

//<img className="nav-img" src={logo} />
