import logo from './logo.svg';
import './App.css';

const Homepage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">What Are You Looking For?</h1>

      <div className="grid grid-cols-2 gap-6">

          <h3 className="text-lg font-medium">Style</h3>
          <p>Explore different outfit styles</p>


          <h3 className="text-lg font-medium">Palette</h3>
          <p>Match colors for your outfits</p>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Homepage;
