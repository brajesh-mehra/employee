import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import uuid from 'uuid';
import './grid.scss'

class Grid extends Component {

  state = {
    data: [],
    pagination: {},
    loading: false,
    columns: [
      {
        title: '#',
        dataIndex: 'id',
        render: (text, record) => (
          <span
            className='edit-row'
            onClick={(e) => { this.handleOnClick(record); }}
          >
            {text}
          </span>)
      },
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        filters: [{ text: 'Name', value: 'name' }, { text: 'Last Name', value: 'lastName' }]
      },
      {
        title: 'Birth Date',
        dataIndex: 'dob'
      },
      {
        title: 'Role',
        dataIndex: 'role'
      },
      {
        title: 'Department',
        dataIndex: 'department'
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: '',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <span
            className='delete-row'
            onClick={(e) => { this.onDelete(record.key, e); }}
          >
            <Icon type="delete" />
          </span>
        ),
      }
    ]
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  handleOnClick = (e) => {
    this.props.handleOnClick(e);
  };

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data, isPageTween: false });
  };
 

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    const pagination = { ...this.state.pagination };
    // Read total count from server
    // pagination.total = data.totalCount;
    pagination.total = 50;
    this.setState({
      loading: false,
      data: this.props.data,
      pagination,
    });
  };

  render() {
    return (
      <div>
        <div className="search-wrapper">
          <Input className="search-input" placeholder="Type the name or last name of the employee" />
          <Button className="search-button" type="primary" icon="search">
            Search
          </Button>
        </div>

        <Table
          columns={this.state.columns}
          rowKey={uuid}
          dataSource={this.props.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }

}

export default Grid;