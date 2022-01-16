import React, { memo, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { NavBarContianer } from './navbarStyle'
import { Breadcrumb } from 'antd'
import {} from 'immutable'
interface NavBarProps {
  [key: string]: any
}

const NavBar = (props: NavBarProps) => {
  interface breadcrumbNameMapType {
    [key: string | number]: any
  }

  const CompontentName = 'navbar-'

  const breadcrumbNameMap: breadcrumbNameMapType = {
    '/': '首页',
    '/information': '关于',
  }
  const navigate = useNavigate()
  const testcallback = useCallback(
    (url) => {
      navigate(url)
    },
    [navigate]
  )

  const location = useLocation()

  let pathSnippets: any[], extraBreadcrumbItems
  if (location.pathname === '/') {
    extraBreadcrumbItems = [
      <Breadcrumb.Item key={location.pathname}>
        <div onClick={() => testcallback(location.pathname)}>{breadcrumbNameMap[location.pathname]}</div>
      </Breadcrumb.Item>,
    ]
  } else {
    pathSnippets = location.pathname.split('/').filter((i) => i)
    extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url: string = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <div onClick={() => testcallback(url)}>{breadcrumbNameMap[url]}</div>
        </Breadcrumb.Item>
      )
    })
  }

  return (
    <NavBarContianer>
      <div className={`${CompontentName}container`}>
        <div className={`${CompontentName}left`}>

        </div>
        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
      </div>
    </NavBarContianer>
  )
}

export default memo<any>(NavBar, function(prevProps: Readonly<any>, nextProps: Readonly<any>) {
  console.log(prevProps)
  console.log(nextProps)
  return false
})
