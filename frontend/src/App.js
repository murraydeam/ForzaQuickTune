import logo from './SVG/logo.svg';
import './App.css';
import ButtonAppBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
      <ButtonAppBar />
      </div>
    </div>
  );
}

export default App;
