import imagetest from './img/bola.jpg';
import './App.css';

function App() {

  const reqApi = () => {
    console.log('clicking')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Images</h2>
        <img src={imagetest} alt="image" className="img-home" />
        <button onClick={reqApi} className="btn-search">buscar</button>
      </header>
    </div>
  );
}

export default App;
