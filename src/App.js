import logo from './logo.svg';
import './App.css';

const testNum = 1093;
const obj = { name: "Sourav", work: "programming" }
const styleObj = {
  color: "purple",
  backgroundColor: "yellow",
  borderRadius: "10px"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>JSX</h1>
          <div className="container">
            <h3>Working with react</h3>
            <p>the number is: {testNum}</p>
            <h6>Details</h6>
            <p style={styleObj}>work:{obj.work}<br />
              Name:{obj.name}
            </p>
          </div>
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
