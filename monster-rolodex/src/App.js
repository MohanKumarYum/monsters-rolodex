import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Frankestein", id: "asdf" },
        { name: "Dracula", id: "12ad" },
        { name: "Zombie", id: "s343" },
      ],
    };
  }
  render() {
    return (
      <div className="app">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
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
