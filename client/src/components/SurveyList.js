import React, { Component } from "react";
import { getAllSurveys } from "../actions/survey";
import { assignedSurvey } from "../actions/assigned";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Dropdown } from "react-bulma-components";
class Survey extends Component {
  state = {
    latestData: [],
  };

  componentDidMount() {
    this.props.getAllSurveys();
  }

  searchHandle = (e) => {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();

    const latestData = this.props.surveys.filter((el) =>
      el.surveyName.toLowerCase().includes(lowercasedValue)
    );

    this.setState({
      latestData: latestData,
    });
  };

  newSurvey = (name) => {
    if (!this.props.assignedSurveys.includes(name)) {
      this.props.assignedSurvey(name);
    } else {
      alert("Already Exists");
    }
  };

  render() {
    return (
      <div className="control ">
        <div className="columns">
          <div className="column is-6">
            <div className="control">
              <p className="control has-icons-left">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Survey Name. e.g. Survey 1"
                  onChange={(e) => this.searchHandle(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <table className="table">
          <tbody>
            {!this.state.latestData
              ? this.props.surveys &&
                this.props.surveys.map((info, i) => {
                  return (
                    <tr key={info.surveyName}>
                      <td>{info.surveyName}</td>
                      <td>
                        <Button
                          className="is-success is-outlined"
                          onClick={(e) => this.newSurvey(info.surveyName)}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : this.state.latestData &&
                this.state.latestData.map((el) => {
                  return (
                    <tr key={el.surveyName}>
                      <td>{el.surveyName}</td>
                      <td>
                        <Button onClick={(e) => this.newSurvey(el.surveyName)}>
                          Add
                        </Button>
                      </td>
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
  return {
    surveys: state.app.allSurveys[0],
    assignedSurveys: state.app.assignedSurveys,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllSurveys, assignedSurvey }, dispatch);
};

export default connect(stateToProps, dispatchToProps)(Survey);
