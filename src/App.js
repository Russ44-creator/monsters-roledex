import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.comonent';

const App = () =>{

  const [searchField, setSearchField] = useState(''); //[value, setValue]

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
       <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
        />

       {/* <CardList monsters={filteredMonsters}/> */}
         
      </div>
  );
};

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],    
//       searchField: ''
//     }
    
//   }

//   componentDidMount(){ 
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(
//         () => {
//         return {monsters: users};
//       }
//       )
//     );
//   }

  // onSearchChange = 

//   render(){
//     const {monsters, searchField} = this.state;
//     const{ onSearchChange } = this;
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return(
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//        <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//         />

//        <CardList monsters={filteredMonsters}/>
        
//       </div>
//     )
//   }
// }
  

export default App;
