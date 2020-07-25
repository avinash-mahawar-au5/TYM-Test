export function assignedSurvey(surveyName) {
  // console.log(surveyName);
  return {
    type: "ASSIGNED_SURVEYS",
    payload: surveyName,
  };
}

export function EmployeeDetails(details) {
  return {
    type: "FINAL_DETAILS",
    payload: details,
  };
}
