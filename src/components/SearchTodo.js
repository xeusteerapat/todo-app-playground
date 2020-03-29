import React, { Component } from 'react';

export default class SearchTodo extends Component {
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Search Todo</label>
          <input type="text" />
        </div>
      </div>
    );
  }
}
