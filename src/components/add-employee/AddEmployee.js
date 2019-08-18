import React, { Component } from 'react';
import { Form, DatePicker, Select, Input } from 'antd';
import moment from 'moment';
import './AddEmployee.scss';

const { Option } = Select;
const AddEmployeeForm = Form.create({
  name: 'add_employee',
  onFieldsChange: (props, changedFields) => {
    props.onChange(changedFields)
  },
  mapPropsToFields: (props) => {
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value
      }),
      lastName: Form.createFormField({
        ...props.lastName,
        value: props.lastName.value
      }),
      dob: Form.createFormField({
        ...props.dob,
        value: props.dob.value ? moment(props.dob.value) : null
      }),
      role: Form.createFormField({
        ...props.role,
        value: props.role.value
      }),
      department: Form.createFormField({
        ...props.department,
        value: props.department.value
      }),
      email: Form.createFormField({
        ...props.email,
        value: props.email.value
      })
    }
  },
  onValuesChange: (_, value) => {
    console.log(value);
  }
})(props => {
  const { getFieldDecorator } = props.form;
  const alignments = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  }
  return (
    <Form layout='horizontal'>
      <Form.Item label="Name" {...alignments}>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Name is required!' }],
        })(<Input placeholder='Type Name' />)}
      </Form.Item>
      <Form.Item label="Last Name" {...alignments}>
        {getFieldDecorator('lastName', {
          rules: [{ required: true, message: 'Last Name is required!' }],
        })(<Input placeholder='Type Last Name' />)}
      </Form.Item>
      <Form.Item label="Birth Date" {...alignments}>
        {getFieldDecorator('dob', {
          rules: [{ required: true, message: 'Select a date!' }],
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item label="Role" {...alignments}>
        {getFieldDecorator('role', {
          rules: [{ required: true, message: 'Select Role!' }],
        })(<Select placeholder='Select a role' >
          <Option value="manager">Manager</Option>
          <Option value="sales">Sales</Option>
        </Select>)}
      </Form.Item>
      <Form.Item label="Department" {...alignments}>
        {getFieldDecorator('department', {
          rules: [{ required: true, message: 'Select Department!' }],
        })(<Select placeholder='Select Department' >
          <Option value="sales">Sales</Option>
          <Option value="it">IT</Option>
        </Select>)}
      </Form.Item>
      <Form.Item label="Email" {...alignments}>
        {getFieldDecorator('email', {
          rules: [
            { type: 'email', message: 'The input is not valid E-mail!' }],
        })(<Input placeholder='Type Email' />)}
      </Form.Item>
    </Form>
  );
});

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: {
          value: '',
        },
        lastName: {
          value: '',
        },
        dob: {
          value: '',
        },
        role: {
          value: '',
        },
        department: {
          value: '',
        },
        email: {
          value: '',
        }
      }
    }
  }

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
    console.log(changedFields);
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="add-employee-container">
        <AddEmployeeForm {...fields} onChange={this.handleFormChange} />
      </div>
    );
  }
}

export default AddEmployee;
