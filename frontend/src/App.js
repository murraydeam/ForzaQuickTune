import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tune from "./components/Tune";

function App() {
  return (
    <div className="Container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Header">
        <Header />
      </div>
      <div className="Tune">
        <Tune />
      </div>
    </div>
  );
}

export default App;
