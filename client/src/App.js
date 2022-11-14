import "./App.css";

//Nav Bar Code
import { useState } from "react";
import NavBar from "./components/navBar";
// pages
import Collection from "./pages/myCollection";
import Decks from "./pages/myDecks";
import Archive from "./pages/archive";
//auth0
import Auth0NavBar from "./auth/nav-bar";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./auth/loading";
import Profile from "./components/profile"; 
//import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [view, setView] = useState("myCollection");
  //auth0
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  // console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    //Nav Bar Code
    //Ternari statement that determined view of signed in VS signed out
    <div id="app" className="d-flex flex-column h-100">
      {!user ? (
        <>
          <Auth0NavBar />
          <span>Greetings, Planeswalker</span>{" "}
        </>
      ) : (
        <>
          <NavBar setView={setView} user={user} />
          {view === "myCollection" && <Collection />}
          {view === "myDecks" && <Decks />}
          {view === "archive" && <Archive />}
        </>
      )}
      ;
    </div>
  );
}

export default App;
