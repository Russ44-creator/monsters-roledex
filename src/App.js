import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.comonent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],    
      searchField: ''
    }
    
  }

  componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users};
      }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
}

  render(){
    const {monsters, searchField} = this.state;
    const{ onSearchChange } = this;
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return(
    <div className="App">
       <SearchBox className='search-box'
                  onChangeHandler={onSearchChange} 
                  placeholder='search monsters'
        />

       {/* {filteredMonsters.map((monster) => {
        return( 
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          );
        })
       } */}

       <CardList monsters={filteredMonsters}/>
        
      </div>
    )
  }
}
  

export default App;
