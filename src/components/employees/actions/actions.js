import * as actionTypes from "../action-type/actionTypes";
import data from '../../grid/__tests__/employees.mock.data';

export const addEmployee = (data) => {
  debugger;
  data.dob = data.dob ? data.dob._i : ''
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload: data
  };
};


export const getEmployees = () => {
  return {
    type: actionTypes.GET_EMPLOYEE,
    payload: data
  };
};
