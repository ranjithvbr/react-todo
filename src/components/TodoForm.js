import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createTodo = event => {
    event.preventDefault();
    if(this.state.text) {
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  } else {
    alert("Enter todo before hit add");
  }
  };

  render() {
    return (
      <form onSubmit={this.createTodo}>
      <div className="form-group">
        <input
          name="text"
          id="todo"
          className="form-control"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add todo"
        />
        <button onClick={this.createTodo} className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}
