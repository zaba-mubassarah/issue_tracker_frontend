
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import './HomeLayout.css';
  import { NavLink, withRouter, Routes, Route } from 'react-router-dom';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import UserList from '../pages/User/UserList';
  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  
  
  const HomeLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark"  mode="inline" style={{marginTop:"50px"}}
                defaultSelectedKeys={['1']}>
                <Menu.Item key="/">
                    <NavLink to="/">

                        <span>Home</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2"> <NavLink to="/user">

                    <span>User</span>
                </NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/issues">

                    <span>Issues</span>
                </NavLink></Menu.Item>

            </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
           
            <div className="site-layout-content">
                <Routes>
                    
                    <Route
                        path="/user"
                        element={<UserList />}
                    />
                 

                </Routes>
            </div>
            
         
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default HomeLayout;
