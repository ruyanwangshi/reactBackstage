import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBarContianer } from './navbarStyle'

const NavBar = () => {
  const [navBarList, setTest] = useState([
    {
      name: '首页',
      path: '/'
    },
    {
      name: '所有文档信息',
      path: '/information'
    }
  ])
  const navigate = useNavigate()
  const testcallback = useCallback(
    (url) => {
      navigate(url)
    },
    [navBarList]
  )
  return (
    <NavBarContianer>
      {
        navBarList.map((item, index) => (
          <div className='navbar-item' key={index} onClick={() => testcallback(item.path)}>{item.name}</div>
        ))
      }
    </NavBarContianer>
  )
}

export default memo<any>(NavBar)
