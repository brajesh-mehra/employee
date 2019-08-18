import { connect } from 'react-redux';
import Employees from "../employees";
import * as actions from '../actions/actions';


const mapStateToProps = (state) => {
  return {
    data: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: (data) => {
      dispatch(actions.addEmployee(data));
    },
    getEmployees: () => {
      dispatch(actions.getEmployees());
    },
  }
};

const EmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);

export default EmployeesContainer;