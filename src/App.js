import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep']
    }
  }

  render(){
    return (
      <section>Hello World</section>
    )
  }
}

export default App;
