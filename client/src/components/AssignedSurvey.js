import React, { Component } from "react";
import { EmployeeDetails } from "../actions/assigned";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "react-bulma-components";
class AssignedSurvey extends Component {
  state = {};

  handleDone = async () => {
    const finalData = {
      finalCurrentEmp: this.props.currentEmp,
      finalAssignedSurveys: this.props.assignedSurveys,
    };

    console.log(finalData);
    if (finalData.finalCurrentEmp && finalData.finalAssignedSurveys) {
      this.props.EmployeeDetails(finalData);
    } else {
      alert("Please Choose");
    }
  };

  removeSurvey = (el) => {
    console.log(el);
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
                        <tr key={i}>
                          <td>
                            {el}{" "}
                            <span className="" style={{ marginLeft: "200px" }}>
                              {" "}
                              <Button onClick={this.removeSurvey(el)}>
                                Remove
                              </Button>
                            </span>
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
            <Button
              className="mr-3 is-rounded is-info is-outlined"
              onClick={this.handleDone}
              // disabled={!this.props.assignedSurveys || !this.props.currentEmp}
            >
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
