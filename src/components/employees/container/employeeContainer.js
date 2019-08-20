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
    getEmployees: (params, onGetEmployee) => {
      dispatch(actions.getEmployees(params))
        .then((data) => {
          onGetEmployee(data);
        });
    },
    updateEmployee: (params) => {
      dispatch(actions.updateEmployee(params));
    },
    deleteEmployee: (id) => {
      dispatch(actions.deleteEmployee(id));
    },
    searchEmployee: (query) => {
      dispatch(actions.searchEmployee(query));
    }
  }
};

const EmployeesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);

export default EmployeesContainer;