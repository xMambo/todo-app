import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      },{
        title: 'Learn JSX',
        done: false
      }]
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  render () {
  return (
    <div className="App">
      <h1>{this.state.message}</h1>
      <form onSubmit={this.formSubmitted.bind(this)}>
        <label htmlFor="newTodo">New Todo</label>
        <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {this.state.todos.map(todo => {
          return <li key={todo.title}>{todo.title}</li>
        })}
      </ul>
    </div>
  );
}
}
export default App;
