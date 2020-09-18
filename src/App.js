import React from 'react';

import { todo } from './data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

console.log(todo)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  toggleItem = itemId => {
    console.log('working', itemId);
    this.setState({ todo: this.state.todo.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
  }

  addItem = itemText => {
    const newItem = {
      task: itemText,
      completed: false,
      id: Date.now()
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }


  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
          <div>
            <TodoList 
              todo={this.state.todo} 
              toggleItem={this.toggleItem}
            />
          </div>
      </div>
      
    );
  }
}

export default App;
