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
      title:"",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch(console.error);
  }
  handleChange = (e) => this.setState({ searchField: e.target.value.toLowerCase(), title: e.target.value.toLowerCase() });
    
  render() {
  const { monsters, searchField, title } = this.state;
  // const filteredMonsters = monsters.filter((monster) =>
  //   monster.name.toLowerCase().includes(searchField)
  // );

    return (
    
      <div className="app">
        {/* <h1>Monsters Rolodex</h1> */}
        <h1>{title}</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={this.handleChange}
      />
      <CardList monsters={monsters} />
    </div>
  );
  }
}

export default App;
