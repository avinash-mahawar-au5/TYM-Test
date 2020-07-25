import React, { Component, Fragment } from "react";
import Employee from "../components/Employee";
import SurveyList from "../components/SurveyList";
import AssignedSurvey from "../components/AssignedSurvey";
import Result from "../components/Result";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container is-fluid" style={{ marginTop: "30px" }}>
          <div className="columns">
            <div className="column is-12 has-text-centered ">
              <span className=" is-size-1-desktop is-size-3-mobile">
                Survey Assigner
              </span>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12 has-background-primary is-center">
              {" "}
              <Employee />{" "}
            </div>
          </div>
          <div className="columns" style={{ marginTop: "90px" }}>
            <div className="column is-6 has-background-primary ">
              {" "}
              <SurveyList />{" "}
            </div>
            <div className="column is-6 has-background-primary">
              {" "}
              <AssignedSurvey />{" "}
            </div>
          </div>

          <div className="columns" style={{ marginTop: "90px" }}>
            <div className="column is-12 ">
              <Result />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
