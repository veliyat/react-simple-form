import React, { Component } from 'react';

class SimpleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskData: '',
            taskErr: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            taskData: e.target.value,
            taskErr: ''
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.taskData === '') {
            this.setState({
                taskErr: 'Task can not be blank.'
            });
        } else {
            console.log(this.state.taskData);
            this.setState({
                taskData: '',
                taskErr: ''
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="task">Add Task</label>
                    <input id="task" className="form-control" value={this.state.taskData} onChange={this.handleChange} />
                    <span>{this.state.taskErr}</span>
                </div>

                <button className="btn btn-primary">Add</button>
            </form>
        );
    }

}

export default SimpleForm;