import { Layout, Menu, theme } from 'antd';
import React, { useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import menu from '@/constants/menu';
import './style.css'

const { Content, Footer, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { pathname } = useLocation();

  const { selectedKey, defaultOpenKeys, menuItems } = useMemo(() => {
    let selectedKey = '';
    const defaultOpenKeys: string[] = [];

    const menuItems = menu.map((item) => {
      if (item.child) {
        const children = item.child.map((child) => {
          if (child.path === pathname) {
            selectedKey = child.key;
            defaultOpenKeys.push(item.key);
          }

          return {
            key: child.key,
            label: <Link to={child.path}>{child.label}</Link>,
          };
        });

        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          children,
        };
      }

      if (item.path === pathname) {
        selectedKey = item.key;
      }

      return {
        key: item.key,
        icon: item.icon,
        label: <Link to={item.path}>{item.label}</Link>,
      };
    });

    return { selectedKey, defaultOpenKeys, menuItems };
  }, [pathname]);

  return (
    <Layout hasSider>
      <Sider className="dashboard-sider" width={240}>
        <div className="dashboard-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          defaultOpenKeys={defaultOpenKeys}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: 16, overflow: 'initial' }}>
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              minHeight: '100%',
              padding: 24,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
           Ant Design Sample ©{new Date().getFullYear()} Created by <Link target='_blank' to='https://github.com/gamalielwkr'>gamalielwkr</Link>
         </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout
