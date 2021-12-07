import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [test, setTest] = useState('测试')
  const navigate = useNavigate()
  const testcallback = useCallback(
    (url) => {
      navigate(url)
    },
    [test]
  )
  return (
    <div>
      <div onClick={() => testcallback('/')}>首页</div>
      <div onClick={() => testcallback('/about')}>关于</div>
    </div>
  )
}

export default memo<any>(NavBar)
