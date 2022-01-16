import React, { memo, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContainer } from './menuStyle'
import { AppstoreOutlined, FormOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

interface Props {
  [key: string | number]: any
}

type Route = {
  name?: string
  path?: string
  icon?: ReactNode
  children?: Route[]
}

function MenuList(props: Props) {
  const navigate = useNavigate()

  const routes: Route[] = [
    {
      name: '首页',
      path: '/',
      icon: <FormOutlined />
    },
    {
      name: '文章管理',
      path: '/information',
      icon: <AppstoreOutlined />,
    },
  ]

  function routeClick(item: any) {
    const route = routes[item.key]
    if (route && typeof route.path === 'string') {
      navigate(route.path)
    }
  }

  return (
    <MenuContainer>
      <Menu className="left-menu" onClick={routeClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
        {routes.map((item, index) => {
          return (
            <Menu.Item key={index} icon={item.icon}>
              {item.name}
            </Menu.Item>
          )
        })}
      </Menu>
    </MenuContainer>
  )
}

export default memo<Props>(MenuList)
