import * as actionTypes from "../action-type/actionTypes";
import { addValueInArray } from "../../../utils/Utils";

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      {
        return { ...state }
      }
      case actionTypes.ADD_EMPLOYEE_PENDING:
      {
        return { ...state }
      }
      case actionTypes.ADD_EMPLOYEE_FULFILLED:
      {
        state = action.payload.data;
        return { ...state }
      }
      case actionTypes.ADD_EMPLOYEE_REJECTED:
      {
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE:
      {
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE_PENDING:
      {
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE_FULFILLED:
      {
        state = action.payload.data;
        return { ...state }
      }
      case actionTypes.UPDATE_EMPLOYEE:
        {
          return { ...state }
        }
      case actionTypes.UPDATE_EMPLOYEE_PENDING:
        {
          return { ...state }
        }
      case actionTypes.UPDATE_EMPLOYEE_FULFILLED:
        {
          state = action.payload.data;
          return { ...state }
        }
        case actionTypes.DELETE_EMPLOYEE:
        {
          return { ...state }
        }
      case actionTypes.DELETE_EMPLOYEE_PENDING:
        {
          return { ...state }
        }
      case actionTypes.DELETE_EMPLOYEE_FULFILLED:
        {
          state = action.payload.data;
          return { ...state }
        }
        case actionTypes.SEARCH_EMPLOYEE:
        {
          return { ...state }
        }
      case actionTypes.SEARCH_EMPLOYEE_PENDING:
        {
          return { ...state }
        }
      case actionTypes.SEARCH_EMPLOYEE_FULFILLED:
        {
          state = action.payload.data;
          return { ...state }
        }
    default:
      {
        return state;
      }
  }
};

export default employeeReducer;