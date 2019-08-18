import * as actionTypes from "../action-type/actionTypes";
import { addValueInArray } from "../../../utils/Utils";

const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      {
        state = addValueInArray(state, action.payload);
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE:
      {
        state = action.payload;
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE_PENDING:
      {
        return { ...state }
      }
    case actionTypes.GET_EMPLOYEE_FULFILLED:
      {
        return { ...state }
      }
    default:
      {
        return state;
      }
  }
};

export default employeeReducer;