//import logo from './logo.svg';
import './App.css';

//Nav Bar Code
import {useState} from 'react';
import NavBar from './components/navBar';
// pages
import Collection from './pages/myCollection';
import Decks from './pages/myDecks';
import Archive from './pages/archive';
import Home from './pages/home';
// Search bar
//import SearchBar from './components/searchBar'
//import CardData from "./components/default-cards.json"

function App() {
  const [view, setView] = useState("myCollection")
  return (
    //Nav Bar Code
    <div className="App">
      <NavBar setView={setView}/>
      {view === 'myCollection' && <Collection/>}
      {view === 'myDecks' && <Decks/>}
      {view === 'archive' && <Archive/>}
      {view === 'home' && <Home />}
    </div>
  );
}

export default App;
