import { combineReducers } from 'redux';
import employeeReducer from '../components/employees/reducers/employee-reducer';

const rootReducer = combineReducers({
  employeeReducer
});

export default rootReducer;