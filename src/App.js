import {Component} from 'react';
import Header from './Components/Header';
import ListDisplay from './Components/ListDisplay';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Matt',
      todoList: ['Code the things', 'Eat', 'Sleep'],
      todoInput: ''
    }
    //binding ensures the proper context of 'this'
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(){
    if(this.state.username === 'Matt'){
      this.setState({
        username: 'Aaron'
      })
    } else {
      this.setState({
        username: 'Matt'
      })
    }
  }

  handleInput(e){
    this.setState({
      todoInput: e.target.value
    })
  }

  //Public Classfield Syntax
  addTodo = (e) => {
    e.preventDefault();

    const listCopy = this.state.todoList.slice();
    listCopy.push(this.state.todoInput)

    this.setState({
      todoList: listCopy,
      todoInput: ''
    })
  }

  render(){
    // const mappedTodos = this.state.todoList.map((todo, i) => (
    //   <h2 key={i}>{todo}</h2>
    // ))

    return (
      <section className='App'>
        <Header 
          greeting='Hello World!'
          username={this.state.username}
          usernameFn={this.changeUsername}/>
        <form>
          <input value={this.state.todoInput} onChange={e => this.handleInput(e)}/>
          <button onClick={e => this.addTodo(e)}>Add Todo</button>
        </form>
        <h1>My Todo List</h1>
        {/* {mappedTodos} */}
        {/* <ListDisplay todo={this.state.todoList[0]}/>
        <ListDisplay todo={this.state.todoList[1]}/>
        <ListDisplay todo={this.state.todoList[2]}/> */}

        {/* Alternative to a mappedVariable */}
        {this.state.todoList.map((todo, i) => (
          <ListDisplay key={i} todo={todo}/>
        ))}
      </section>
    )
  }
}

export default App;
