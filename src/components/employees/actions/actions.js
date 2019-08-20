import * as actionTypes from "../action-type/actionTypes";
import API from '../services/employees-service';

export const addEmployee = (data) => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload: API.addEmployee(data)
  };
};


export const getEmployees = (params) => {
  return {
    type: actionTypes.GET_EMPLOYEE,
    payload: API.getEmployees(params)
  };
};

export const updateEmployee = (params) => {
  return {
    type: actionTypes.UPDATE_EMPLOYEE,
    payload: API.updateEmployee(params)
  };
};

export const deleteEmployee = (id) => {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    payload: API.deleteEmployee(id)
  };
};

export const searchEmployee = (query) => {
  return {
    type: actionTypes.SEARCH_EMPLOYEE,
    payload: API.searchEmployee(query)
  };
};



