import React, { Component } from "react";
import { getAllEmployees, setSelecetdEmp } from "../actions/employee";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Dropdown } from "react-bulma-components";
class Employee extends Component {
  state = {
    selectedEmp: "",
  };

  componentDidMount() {
    this.props.getAllEmployees();
  }

  empChange = async (e) => {
  
    e.persist();
    e.preventDefault();
    const data = await e.target.value;
    this.props.setSelecetdEmp(data);
  };

  render() {
    // console.log(this.props.employees);
    return (
      <div className="control ">
        <div className="select">
          <select
            className="is-focused"
            placeholder=""
            onChange={this.empChange}
          >
            {this.props.employees &&
              this.props.employees.map((emp) => {
                return <option key={emp.empName}>{emp.empName} </option>;
              })}
          </select>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    employees: state.app.allEmployees[0],
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllEmployees, setSelecetdEmp }, dispatch);
};

export default connect(stateToProps, dispatchToProps)(Employee);
