import React from "react";
import TodoText from "./TodoText";

export default class Todo extends React.Component {
    state = {
        mode: "show",
        todoText: ""
    };

    componentDidMount() {
      // eslint-disable-next-line
        this.state.todoText = this.props.todo.text;
    }

    onEdit = () => {
        this.setState({mode: "edit"});
    }

    onUpdate = id => {
        this
            .props
            .onUpdate(id, this.state.todoText);
        this.setState({mode: "show"});
    }

    handleChangeTodoText = (e) => {
        this.setState({todoText: e.target.value});
    }

    render() {
        const {
            ...props
        } = this.props;
        const {mode, todoText} = this.state;
        return (
                <div className="container" style={{paddingTop: '5px'}}>
                    <div className="row col-sm-12">
                        <div className="col-sm-1">
                            <input
                                type="checkbox"
                                value=""
                                checked={props.todo.complete}
                                onClick={props.toggleComplete}/>
                        </div>
                        <div className="col-sm-4">
                            {mode === "show"
                                ?  <TodoText todoText={props.todo.text} strike={props.todo.complete}/>
                                :<input
                                    type="text"
                                    className="form-control"
                                    value={todoText}
                                    onChange={this.handleChangeTodoText}/>}
                        </div>
                        <div className="col-sm-2">
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                {mode === "show"
                                    ? <button type="button" className="btn btn-secondary" onClick={this.onEdit}>
                                            Edit
                                        </button>
                                    : <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => this.onUpdate(props.todo.id)}>
                                        Save
                                    </button>}
                                <button type="button" className="btn btn-danger" onClick={props.onDelete}>
                                   Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};
