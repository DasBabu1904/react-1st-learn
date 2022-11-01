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
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className="person"><h1>Sourav Das</h1>
      <p>I'm a student </p></div>
  )
}

export default App;
