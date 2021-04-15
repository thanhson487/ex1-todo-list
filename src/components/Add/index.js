import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { onOpenForm } from "../../actions/taskTodo";

class AddTodo extends Component {
  handleSetForm = () => {
    this.props.onOpenForm();
  };
  render() {
    return (
      <div className="AddTodos">
        <i
          className="far fa-plus-circle AddTodos__icon"
          onClick={this.handleSetForm}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onOpenForm,
};

export default connect(null, mapDispatchToProps)(AddTodo);
