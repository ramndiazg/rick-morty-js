import imagetest from './img/bola.jpg';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setcharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setcharacters(characterApi.results);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h2 className="title">Rick & Morty</h2>
      {characters? (
        <Characters characters={characters}/>
      ):(
        <>
        <img src={imagetest} alt="image" className="img-home" />
        <button onClick={reqApi} className="btn-search">buscar</button>
        </>
      )}
      </header>
    </div>
  );
}

export default App;
