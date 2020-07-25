import React, { Component } from "react";
import { EmployeeDetails } from "../actions/assigned";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "react-bulma-components";
class AssignedSurvey extends Component {
  state = {
    finalAssignedSurveys: [],
    finalCurrentEmp: "",
  };

  handleDone = () => {
    const finalData = {
      finalCurrentEmp: this.props.currentEmp,
      finaAssignedSurveys: this.props.assignedSurveys,
    };
    if (!this.props.finalDetails.includes(finalData)) {
      this.props.EmployeeDetails(finalData);
    } else {
      alert("Surveys are already assigned to this Employee");
    }
  };

  removeSurvey = (i) => {
    console.log(i);
  };
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column ">
            <h4>Assigned Surveys</h4>
          </div>
        </div>
        <div className="columns" style={{ marginTop: "5px" }}>
          <div className="column">
            <div className="column ">
              <table className="table">
                <tbody style={{ height: "200px" }}>
                  {this.props.assignedSurveys &&
                    this.props.assignedSurveys.map((el, i) => {
                      return (
                        <tr key={el}>
                          <td>{el}</td>
                          <td>
                            <Button onClick={(el) => this.removeSurvey(el)}>
                              Remove
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="colulmns">
          <div className="colulmn">
            <Button className="mr-3 is-rounded" onClick={this.handleDone}>
              Done
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  // console.log("state in ass", state);
  return {
    assignedSurveys: state.app.assignedSurveys,
    currentEmp: state.app.currentEmp,
    finalDetails: state.app.finalDetails,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ EmployeeDetails }, dispatch);
};
export default connect(stateToProps, dispatchToProps)(AssignedSurvey);
