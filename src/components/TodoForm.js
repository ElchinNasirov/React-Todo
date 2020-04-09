import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault();

        this.setState({ todo: "" });
        this.props.addTodo(e, this.state.todo);
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    name="todo"
                    // placeholder="add your todo"
                    value={this.state.todo}
                    onChange={this.handleChanges}
                />
                <button>ADD</button>
            </form>
        )
    }
}
export default TodoForm;