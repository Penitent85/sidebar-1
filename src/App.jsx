import { Button, Layout, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ToggleThemeButton from './components/ToggleThemeButton';
const { Sider, Header } = Layout;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {token: { colorBgContainer }}= theme.useToken() 
  return (
    <Layout>
      <Sider  collapsed={collapsed}
      collapsible trigger={null}
      theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout className='content'>
        <Header style={{ padding: 0, background: colorBgContainer  }}>
          <Button
          className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            type='text'
            icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          >
            Primary Button
          </Button>
        </Header>
      </Layout>
    </Layout>
  );
};

export default App;
