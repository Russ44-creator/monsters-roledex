import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: {firstname:'Russ', lastname: "Deng"},
      company: 'Apple'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I am working at {this.state.company}
          </p>
          <button 
            onClick={() => {
              this.setState({name: {firstname:'Albert', lastname: "Deng"}});
              console.log(this.state);
            }}
          >
            change name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
    
  }
  

export default App;
