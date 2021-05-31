//CSS
import "./App.css";
//Components
import NavBar from "./components/NavBar.js";
import DataDev from "./components/DataDev.js";
import Footer from "./components/Footer.js";
import CardBriefCase from "./components/CardBriefCase.js";
import DevInfo from './components/DevInfo.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <header className="App-header">
        <DataDev></DataDev>
        <DevInfo></DevInfo>
        <CardBriefCase></CardBriefCase>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
