import Sliders from "./components/Sliders";
import Navbar from "./components/Navbar";
import Drivetype from "./components/Drivetype";

function App() {
  return (
    <div className="Container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <Sliders />
        <Drivetype />
      </div>
    </div>
  );
}

export default App;
