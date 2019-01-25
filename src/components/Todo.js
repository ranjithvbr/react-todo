import React from "react";
import TodoText from "./TodoText";

export default class Todo extends React.Component {
  state = {
    mode: "show",
    todoText: ""
  };

  componentDidMount() {
    this.state.todoText = this.props.todo.text;
  }

  onEdit = () => {
    this.setState({mode: "edit"});
  }

  onUpdate = id => {
    this.props.onUpdate(id, this.state.todoText);
    this.setState({mode: "show"});
  }

  handleChangeTodoText = (e) => {
    this.setState({todoText: e.target.value});      
  }

  render() {
    const {...props} = this.props;
    const { mode, todoText } = this.state;
    return (
  <div style={{ display: "flex", justifyContent: "center" }}>
  <input type="checkbox" value="" checked={props.todo.complete} onClick={props.toggleComplete}/>
  {mode === "show" ? 
  <TodoText todoText={props.todo.text} strike={props.todo.complete}/> :  <input type="text" value={todoText} onChange={this.handleChangeTodoText}/>}
  {mode === "show" ? <button onClick={this.onEdit}>edit</button> : <button onClick={() => this.onUpdate(props.todo.id)}>save</button>}
    <button onClick={props.onDelete}>delete</button>
  </div>
    )
  }
};
