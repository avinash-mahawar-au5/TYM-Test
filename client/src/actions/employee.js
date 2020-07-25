import axios from "axios";

const Url = "http://localhost:5000/api/tym";

export function getAllEmployees() {
  let employees = axios.get(`${Url}/all-employees`);
  return (dispatch) => {
    employees
      .then((emp) => {
        dispatch({
          type: "GET_ALL_EMPLOYEES",
          payload: emp.data.response,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function setSelecetdEmp(selectedEmp) {
  // console.log(selectedEmp);
  return {
    type: "SET_EMP",
    payload: selectedEmp,
  };
}
