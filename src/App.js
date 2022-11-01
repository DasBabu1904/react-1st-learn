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
      <Person name="Rubel" nayka="mousumi"></Person>
      <Person name="bappa" nayka="purnima"></Person>
      <Person name="kuber" nayka="kopila"></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name} Das</h1>
      <p>his nayka is {props.nayka}</p></div>
  )
}

export default App;
