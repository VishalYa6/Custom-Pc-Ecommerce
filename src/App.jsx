import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companiesa from "./components/Companiesa/Companiesa";
import Computers from "./components/Computers/Computers";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companiesa />
      <Computers />
    </div>
  );
}

export default App;
