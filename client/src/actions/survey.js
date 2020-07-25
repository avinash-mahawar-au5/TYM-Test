import axios from "axios";

const Url = "http://localhost:5000/api/tym";

export function getAllSurveys() {
  let surveys = axios.get(`${Url}/all-surveys`);
  return (dispatch) => {
    surveys
      .then((survey) => {
        dispatch({
          type: "GET_ALL_SURVEYS",
          payload: survey.data.response,
        });
      })
      .catch((error) => console.log(error));
  };
}

