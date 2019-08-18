import React, { Component } from 'react';
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
      fields: {}
    };
  };

  componentWillMount() {
    this.props.getEmployees();
  };

  showModal = (data) => {
    if (data) {
      this.setState({
        isEdit: true
      });
    } else {
      this.setState({
        isEdit: false
      });
    }
    this.setState({
      visible: true
    });
  };

  resetForm = () => {
    const { form } = this.formRef.props;
    if (form)
      form.resetFields();
  };

  handleOk = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.props.addEmployee(values);
      this.resetForm();
      this.setState({ visible: false });
    });
  };

  handleCancel = e => {
    console.log(e);
    this.resetForm();
    this.setState({
      visible: false
    });
  };

  handleOnClick = record => {
    let obj = {
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
    this.showModal(record);
  }

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
    console.log(changedFields);
  };

  gridData = () => {
    if (this.props.data.employeeReducer)
      return utils.convertObjToArray(this.props.data.employeeReducer);
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
              <Grid data={data} handleOnClick={this.handleOnClick} />
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