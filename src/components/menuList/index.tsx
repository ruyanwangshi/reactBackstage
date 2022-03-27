import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContainer } from './menuStyle'
import { Menu } from 'antd'

import routes from './constant'

interface Props {
  [key: string | number]: any
}

// 左侧菜单栏

function MenuList(props: Props) {
  const navigate = useNavigate()

  function routeClick(index: number,item: any) {
    const route = item
    console.log(route)
    if (route && typeof route.path === 'string') {
      navigate(route.path)
    }
  }

  return (
    <MenuContainer>
      <Menu defaultSelectedKeys={['0']} className="left-menu" mode="inline" theme="dark">
        {routes.map((routeItem, index) => {
          return (
            <Menu.SubMenu key={index} title={routeItem.name}>
              {routeItem.children &&
                routeItem.children.map((item, indey) => {
                  return (
                    <Menu.Item key={indey} onClick={(e) => routeClick(index, item)}>
                      {item.name}
                    </Menu.Item>
                  )
                })}
            </Menu.SubMenu>
          )
        })}
      </Menu>
    </MenuContainer>
  )
}

export default memo<Props>(MenuList)
