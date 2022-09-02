import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Tune from "./components/Tune";
import Footer from './components/Footer'

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
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
