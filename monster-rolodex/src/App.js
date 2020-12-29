import { Component } from "react";
import "./App.css";
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
        <CardList>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;
