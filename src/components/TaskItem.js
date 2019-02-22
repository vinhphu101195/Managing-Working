import React, { Component } from "react";

export default class TaskItem extends Component {
  onUpdateStatus = () => {
    // truyen ra pa no
    //console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    // truyen ra pa no
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    // truyen ra pa no
    this.props.onUpdate(this.props.task.id);
  };

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status === true
                ? "label label-success"
                : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "kick hoat" : "an"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onUpdate}
          >
            <span className="fa fa-pencil mr-5" />Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5" />Remove
          </button>
        </td>
      </tr>
    );
  }
}
