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
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(){
    this.setState({username: 'Eric'})
  }

  //Public Classfield Syntax
  properContext = () => {
    this.setState({username: 'Aaron'})
  }

  render(){
    // const mappedTodos = this.state.todoList.map((todo, i) => {
    //   return (
    //     <h2 key={i}>{todo}</h2>
    //   )
    // })

    const mappedTodos = this.state.todoList.map((todo, i) => {
      return (
        <ListDisplay key={i} todo={todo}/>
      )
    })

    return (
      <div className="App">
        {/* props are passed in the following syntax: propName={propValue}. This will place a key value pair on the props object of the component receiving the props */}
        <Header 
          username={this.state.username} 
          greeting='Hello World!' 
          usernameFn={this.changeUsername} 
          secondUsernameFn={this.properContext}/>
        <h1>My Todo List</h1>
        {mappedTodos}
        {/* <ListDisplay todo={this.state.todoList[0]}/>
        <ListDisplay todo={this.state.todoList[1]}/>
        <ListDisplay todo={this.state.todoList[2]}/> */}

        {/* Alternative to mappedTodos variable */}
        {this.state.todoList.map((todo, i) => (
            <ListDisplay key={i} todo={todo}/>
          )
        )}
      </div>
    )
  }
}

export default App;
