import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      string: "Hello Mohan"
    }
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
             <p>{this.state.string}</p>
            <button onClick={()=> this.setState({string: "Hello Thanuj"})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
