import React, {Component} from 'react';
import Header from './Components/Header';
import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
    //binding methods ensures proper context
    // variable to save new instance context
  }

  render(){
    return (
      <section>Hello World</section>
    )
  }
}

export default App;
