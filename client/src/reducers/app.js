const defaultState = {
  text: "",
  allEmployees: [],
  allSurveys: [],
  assignedSurveys: [],
  currentEmp: "",
  finalDetails: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYEES":
      return {
        ...state,
        allEmployees: [...state.allEmployees, action.payload],
      };
    case "GET_ALL_SURVEYS":
      return {
        ...state,
        allSurveys: [...state.allSurveys, action.payload],
      };

    case "ASSIGNED_SURVEYS":
      return {
        ...state,
        assignedSurveys: [...state.assignedSurveys, action.payload],
      };
    case "SET_EMP":
      return {
        ...state,
        currentEmp: action.payload,
      };

    case "FINAL_DETAILS":
      return {
        ...state,
        finalDetails: [...state.finalDetails, action.payload],
      };
    default:
      return defaultState;
  }
};
