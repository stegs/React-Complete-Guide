import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'RyanRocks' },
      { username: 'RyanSucks' }
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'RyanSucks' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.usernameChangeHandler} name="RyanRocks"/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
      </div>
    );
  }
}

export default App;
