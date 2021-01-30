import logo from './logo.svg';
import Person from './completeGuide/Person/Person';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      { name: 'Nisanur', number: 10 },
      { name: 'Furkan', number: 11 },
      { name: 'Yağmur', number: 12 },
    ],
  };
  render() {
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          number={this.state.persons[0].number}
        />
        <Person
          name={this.state.persons[1].name}
          number={this.state.persons[1].number}
        >
          <h2>Im doing practise on React</h2>
        </Person>
        <Person
          name={this.state.persons[2].name}
          number={this.state.persons[2].number}
        />
      </div>
    );
  }
}

export default App;
