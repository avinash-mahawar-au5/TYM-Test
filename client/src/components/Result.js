import React, { Component } from "react";
import { EmployeeDetails } from "../actions/assigned";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Result extends Component {
  render() {
    return (
      <div>
        <h3>Employee Details</h3>
        <table className="table">
          <tbody>
            {this.props.finalDetails &&
              this.props.finalDetails.map((details, i) => {
                return (
                  <tr key={i}>
                    <td>{details.finalCurrentEmp}</td>
                    {details.finalAssignedSurveys.map((surveys, i) => {
                      return (
                        <tr key={i}>
                          <td>{surveys}</td>
                          <td></td>
                        </tr>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const stateToProps = (state) => {
  // console.log(state);
  return {
    finalDetails: state.app.finalDetails,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ EmployeeDetails }, dispatch);
};
export default connect(stateToProps, dispatchToProps)(Result);
