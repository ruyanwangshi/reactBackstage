import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBarContianer } from './navbarStyle'
interface NavBarProps {
  [key: string]: any
}

const NavBar = (props: NavBarProps) => {
  const [navBarList, setTest] = useState([
    {
      name: '首页',
      path: '/',
    },
    {
      name: '所有文档信息',
      path: '/information',
    },
  ])
  const navigate = useNavigate()
  const testcallback = useCallback(
    (url) => {
      navigate(url)
    },
    [props]
  )
  return (
    <NavBarContianer>
      <div className="navbar-container">
        {navBarList.map((item, index) => (
          <div className="navbar-item" key={index} onClick={() => testcallback(item.path)}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="navbar-booth"></div>
    </NavBarContianer>
  )
}

export default memo<any>(NavBar)
