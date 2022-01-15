import React, { useState } from 'react'
import Routes from '@/routes'
import { AppContainer } from './common/app'
import NavBar from '@/components/navbar'
import { Menu } from 'antd'
import { AppstoreOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="App">
      <NavBar />
      <AppContainer>
        <Menu className="left-menu" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={collapsed}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu>
        <div className="right-content">
          <Routes />
        </div>
      </AppContainer>
    </div>
  )
}

export default App
