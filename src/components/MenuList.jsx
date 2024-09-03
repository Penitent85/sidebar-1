import { Menu } from 'antd';
import {
  AppstoreOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  PayCircleOutlined, 
  SettingOutlined,
} from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key='activity' icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key='subtasks' icon={<BarsOutlined />}>
        <Menu.Item key='task1'>Subtask 1</Menu.Item>
        <Menu.Item key='task2'>Subtask 2</Menu.Item>
        <Menu.SubMenu key='subtasks1' title='subtask'>
          <Menu.Item key='task3'>Subtask 3</Menu.Item>
          <Menu.Item key='task4'>Subtask 4</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key='progress' icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>

      <Menu.Item key='payment' icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key='settings' icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
