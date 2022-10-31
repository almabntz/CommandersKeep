import logo from './logo.svg';
import './App.css';
//Nav Bar Code
import {useState} from 'react';
import NavBar from './components/navBar';
// pages
import Collection from './pages/myCollection';
import Decks from './pages/myDecks';
import Formats from './pages/formats';


function App() {
  const [view, setView] = useState("myCollection")
  return (
    <div className="App">
      <NavBar setView={setView}/>
      {view === 'myCollection' && <Collection/>}
      {view === 'myDecks' && <Decks/>}
      {view === 'formats' && <Formats/>}
    </div>
  );
}

export default App;
