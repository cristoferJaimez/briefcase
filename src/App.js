//CSS
import "./App.css";
//Components
import NavBar from "./components/NavBar";
import DataDev from "./components/DataDev.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <DataDev></DataDev>
      </header>
    </div>
  );
}

export default App;
