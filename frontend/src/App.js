import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="Container">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Header">
        <Header />
      </div>
      <div className="Body">
        <Body />
      </div>
    </div>
  );
}

export default App;
