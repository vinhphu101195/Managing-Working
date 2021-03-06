import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    // truong hop them lien tuc
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    } else if (nextProps && nextProps.task == null) {
      // truong hop sua -> them
      this.setState({
        id: "",
        name: "",
        status: false
      });
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = even => {
    var target = even.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    // truyen thang state ra ngoai app.js
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
  };

  render() {
    var { id } = this.state;

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== "" ? "Edit Working" : "Add Working"}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            />
          </h3>
        </div>

        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <label>Status :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Hide</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Add
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
