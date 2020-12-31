import logo from "./logo.svg";
import "./App.css";
import Greeting1 from "./components/Greeting1";
import Greeting2 from "./components/Greeting2";
import Greeting3 from "./components/Greeting3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting3 time="Morning" />
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

export default App;
