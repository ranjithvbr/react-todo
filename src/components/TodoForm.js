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

  /**
   * Create new todo
   */
  createTodo = event => {
    event.preventDefault();
    if (this.state.text) {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false
      });
      this.setState({ text: "" });
    } else {
      // Alter the user when the field empty
      alert("Enter todo before hit add");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 col-md-offset-4">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input
                name="text"
                id="todo"
                className="form-control"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Add todo"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.createTodo}
            >
              <i className="fas fa-plus-circle" />
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
