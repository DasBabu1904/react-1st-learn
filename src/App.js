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
  const nayoks = ["Sourav", "Nabil", "Uday", "Shovon"];
  const naykas = ["Puspita", "Nai Nai", "Tarunnya", "Janina"];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name={nayoks[0]} nayka="mousumi"></Person>
      <Person name={nayoks[1]} nayka="purnima"></Person>
      <Person name={nayoks[2]} nayka="kopila"></Person> */}
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
