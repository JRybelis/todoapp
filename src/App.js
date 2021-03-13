import React, {Component} from 'react';
import Todos from './Todos.js';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play some mario kart'}
    ]
  }

  render (){
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo list</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;