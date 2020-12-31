import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      meaningOflife: 47,
    };
  }

  handleClick = () =>
    this.setState({ meaningOflife: this.state.meaningOflife + 1 });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h4>{this.state.meaningOflife}</h4>
          <button onClick={this.handleClick}>Update React</button>
        </header>
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// 	          <h4>{ this.state.meaningOflife }</h4>
//         <button>Update React</button>
//     </div>
//   );
// }

// export default App;
