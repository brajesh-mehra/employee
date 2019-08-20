import React, { Component } from 'react';
import { Modal, Form, DatePicker, Select, Input } from 'antd';
import moment from 'moment';
const { Option } = Select;


const AddEmployeeForm = Form.create(
  {
    name: 'add_employee',
    onFieldsChange: (props, changedFields) => {
      props.onChange(changedFields)
    },
    mapPropsToFields: (props) => {
      return {
        id: Form.createFormField({
          ...props.id,
          value: props.id ? props.id.value : 0
        }),
        name: Form.createFormField({
          ...props.name,
          value: props.name ? props.name.value : ''
        }),
        lastName: Form.createFormField({
          ...props.lastName,
          value: props.lastName ? props.lastName.value : ''
        }),
        dob: Form.createFormField({
          ...props.dob,
          value: props.dob ? moment(props.dob.value) : null
        }),
        role: Form.createFormField({
          ...props.role,
          value: props.role ? props.role.value : ''
        }),
        department: Form.createFormField({
          ...props.department,
          value: props.department ? props.department.value : ''
        }),
        email: Form.createFormField({
          ...props.email,
          value: props.email ? props.email.value : ''
        })
      }
    },
    onValuesChange: (_, value) => {
      //console.log(value);
    }
  })(

    class extends Component {
      render() {
        const { visible, onCancel, onSave, form, title } = this.props;
        const { getFieldDecorator } = form;
        const alignments = {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 }
        }
        return (
          <Modal
            visible={visible}
            title={title}
            okText="Save"
            onCancel={onCancel}
            onOk={onSave}
          >
            <Form layout='horizontal'>
              <Form.Item style={{ display: 'none' }}>
                {getFieldDecorator('id')(<Input placeholder='Id' />)}
              </Form.Item>
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
          </Modal>
        )
      };
    }
  )

export default AddEmployeeForm;