import React from 'react';

import { todo } from './data';
import TodoListSet from './components/TodoComponents/TodoList';

console.log(todo)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <div>
            <TodoListSet todo={todo} />
          </div>
      </div>
      
    );
  }
}

export default App;
