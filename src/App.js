import React, {Component} from 'react';
import Todos from './Todos.js';
import AddTodo from './AddForm.js';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play some mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: filteredTodos
    })
  }
  addTodo = (todo) => {
        todo.id = Math.random();
        let updatedTodos = [...this.state.todos, todo]
        this.setState({
          todos: updatedTodos
        })
  }
  render (){
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo list</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;