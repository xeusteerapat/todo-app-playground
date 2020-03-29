import React, { Component } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import SearchTodo from '../components/SearchTodo';

export default class TodoList extends Component {
  state = {
    todos: []
  };

  // add new todo to the state
  addNewTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  updateTodo = (id, updatedTask) => {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  };

  toggleCompleted = id => {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  };

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        isCompleted={todo.isCompleted}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        completeTodo={this.toggleCompleted}
      />
    ));
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        <SearchTodo />
        {todos}
      </div>
    );
  }
}
