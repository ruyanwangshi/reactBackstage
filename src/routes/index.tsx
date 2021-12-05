import Home from '@/view/home'
import About from '@/view/about'
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

function Routes() {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]
  return useRoutes(routes)
}

export default memo(Routes)
