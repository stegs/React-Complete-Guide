import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ryan', age: 29 },
      { name: 'Jonathan', age: 39 },
      { name: 'Andy', age: 31 } 
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Jim';
    this.setState({persons: [
        { name: 'Jim', age: 29 },
        { name: 'Jonathan', age: 39 },
        { name: 'Andy', age: 32 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Biking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
