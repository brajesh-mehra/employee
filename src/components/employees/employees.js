import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import * as utils from "../../utils/Utils";
import './employees.scss';
import Grid from '../grid/grid';
import AddEmployeeForm from "../add-employee/add-employee-form/AddEmployeeForm";
const { Header, Content } = Layout;

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isEdit: false,
      fields: {},
      pagination: {
      }
    };
  };

  componentWillMount() {
    const params = {
      "page": 1,
      "results": 10,
      "sortField": "id",
      "sortOrder": "ascending"
    };
    this.getEmployeesList(params);
  };

  getEmployeesList = (params) => {
    this.props.getEmployees(params, this.onGetEmployee);
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  resetForm = () => {
    const { form } = this.formRef.props;
    if (form)
      form.resetFields();
  };

  formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };


  handleOk = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.dob = this.formatDate(values.dob);
      if (this.state.isEdit) {
        this.props.updateEmployee(values);
      } else {
        this.props.addEmployee(values);

      }

      this.resetForm();
      this.setState({
        visible: false,
        isEdit: this.isEdit ? false : this.isEdit
      });
    });
  };

  handleCancel = e => {
    this.resetForm();
    this.setState({
      visible: false,
      isEdit: this.isEdit ? false : this.isEdit
    });
  };

  handleOnClick = record => {
    let obj = {
      id: {
        value: record.id ? record.id : 0,
      },
      name: {
        value: record.name ? record.name : '',
      },
      lastName: {
        value: record.lastName ? record.lastName : '',
      },
      dob: {
        value: record.dob ? record.dob : '',
      },
      role: {
        value: record.role ? record.role : '',
      },
      department: {
        value: record.department ? record.department : '',
      },
      email: {
        value: record.email ? record.email : '',
      }
    };

    this.setState({
      isEdit: true,
      fields: obj
    });
    this.showModal();
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };


  gridData = () => {
    if (this.props.data.employeeReducer) {
      if (this.props.data.employeeReducer.result) {
        return utils.convertObjToArray(this.props.data.employeeReducer.result.employeeList);
      }
    }
  };

  onGetEmployee = () => {
    this.setState({
      pagination: {
        total: this.props.data.employeeReducer.total
      }
    });
  };
  render() {
    const { isEdit } = this.state;
    const data = this.gridData();
    return (
      <Layout className="layout" >
        <Header>
          <div className="app-name">
            <h3>Employee Management</h3>
          </div>
        </Header>
        <Content>
          <h3 className="page-heading">Employees</h3>
          <div className="content-wrapper">
            <div>
              <Grid onSearch={this.props.searchEmployee} pagination={this.state.pagination} onDelete={this.props.deleteEmployee}
                onFilter={this.getEmployeesList} data={data} handleOnClick={this.handleOnClick} />
              <Button className="add-employee-btn" onClick={this.showModal} type="primary">
                New Employee
            </Button>
              <AddEmployeeForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onSave={this.handleOk}
                title={`${isEdit ? 'Edit' : 'New'} Employee`}
                {... this.state.fields}
                onChange={this.handleFormChange}
              />
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
};

export default Employees;

Employees.propTypes = {
  data: PropTypes.object,
  addEmployee: PropTypes.func,
  getEmployees: PropTypes.func,
  updateEmployee: PropTypes.func,
  deleteEmployee: PropTypes.func,
  searchEmployee: PropTypes.func
};