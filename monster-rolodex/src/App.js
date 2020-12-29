import { Component } from "react";
import "./App.css";
import "./components/card-list.components.jsx"
import { CardList } from "./components/card-list.components.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(console.error);
  }
  render() {
    return (
      <div className="app">
        {/* <h1>{ this.props.component}</h1> */}
        {/* <h1>{ this.props.name}</h1> */}
        <CardList name="Mohan Kumar">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
        {/* <button
          onClick={() =>
            this.setState({ monsters: [{ name: "Banshee", id: "asdf" }] })
          }
        >
          Change Monster
        </button> */}
      </div>
    );
  }
}

export default App;
