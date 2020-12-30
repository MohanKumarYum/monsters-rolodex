import { Component } from "react";
import "./App.css";
//  This below import works when "export default Cardlist" syntax is used.
// import CardList from "./components/card-list.components.jsx";
// When "export default const CardList = () => {}" syntax is used, destructure and import as below.
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch(console.error);
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="app">
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) =>
            this.setState({ searchField: e.target.value.toLowerCase() })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
