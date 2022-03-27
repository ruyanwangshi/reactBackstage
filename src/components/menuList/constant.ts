import React, { ReactNode } from 'react'
import { AppstoreOutlined, FormOutlined, SettingOutlined } from '@ant-design/icons'
type Route = {
  name?: string
  path?: string
  Icon?: ReactNode
  children?: Route[]
}

console.log('AppstoreOutlined=>', AppstoreOutlined)

const routes: Route[] = [
  {
    name: '博客管理',
    Icon: SettingOutlined,
    children: [
      {
        name: '新增文章',
        path: '/home',
        Icon: FormOutlined,
      },
      {
        name: '文章管理',
        path: '/information',
        Icon: AppstoreOutlined,
      },
    ],
  },
]
export default routes
