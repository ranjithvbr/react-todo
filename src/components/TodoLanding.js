import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  handleUpdateTodo = (id, updateText) => {
    this.setState(state => {
      todos: state.todos.map(todo => {
        if(todo.id === id) {
          todo.text = updateText;
        }
        return todo;
      })})
  };

  render() {
    let todosComplete = [];
    let todosNotComplete = [];

    this.state.todos.forEach(todo => {
      if(todo.complete) {
        todosComplete = [todo, ...todosComplete];
      } else {
        todosNotComplete = [todo, ...todosNotComplete];
      }
    })

    return (
      <div className="container">
        <h2>Add Item</h2>
        <TodoForm onSubmit={this.addTodo} />
        <hr/>
        <h2>Todo</h2>
        <div>
          Left: {todosNotComplete.length}
        </div>
        {todosNotComplete.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            onUpdate={this.handleUpdateTodo}
            todo={todo}
          />
        ))}
                <hr/>
        <h2>Completed</h2>
        <div>
          okay: {todosComplete.length}
        </div>
        {todosComplete.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            onUpdate={this.handleUpdateTodo}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
