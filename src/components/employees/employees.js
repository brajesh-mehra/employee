import React from 'react';
import { Layout } from 'antd';
import './employees.scss';

const { Header, Content } = Layout;

const Employees = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="app-name">
          <h3>Employee Management</h3>
        </div>
      </Header>
      <Content>
      <h3>Employees</h3>
        <div className="content-wrapper">
          <div>Content</div>
        </div>

      </Content>

    </Layout>
  );
};

export default Employees;