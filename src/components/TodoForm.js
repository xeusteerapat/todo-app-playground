import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TodoForm extends Component {
  state = { task: '' };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo({ ...this.state, id: uuidv4(), isCompleted: false });
    this.setState({ task: '' });
  };

  render() {
    return (
      <div className="ui form">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="task">Add New Todo: </label>
            <input
              name="task"
              type="text"
              placeholder="New todo"
              id="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </div>
          <button className="ui primary button">Add Todo</button>
        </form>
      </div>
    );
  }
}
