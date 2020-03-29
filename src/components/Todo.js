import React, { Component } from 'react';

export default class Todo extends Component {
  state = { isEditing: false, task: this.props.task, isCompleted: false };

  handleRemoveTodo = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleComplete = () => {
    this.props.completeTodo(this.props.id);
  };

  renderTodo = () => {
    const { isCompleted } = this.props;
    console.log(isCompleted);
    if (this.state.isEditing) {
      return (
        <div className="ui form">
          <form action="" onSubmit={this.handleUpdate}>
            <div className="field">
              <input
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChange}
              />
            </div>
            <button className="ui green button">Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <div className="ui button yellow" onClick={this.toggleForm}>
                Edit
              </div>
              <div className="ui button red" onClick={this.handleRemoveTodo}>
                Remove
              </div>
            </div>
            <div
              className="content"
              onClick={this.handleComplete}
              style={{
                textDecoration: isCompleted ? 'line-through' : 'none'
              }}
            >
              {this.props.task}
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.renderTodo();
  }
}
