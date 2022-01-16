import Home from '@/view/home'
import Information from '@/view/Information'
import React, { memo } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/information',
      element: <Information />,
    },
  ]
  return useRoutes(routes)
}

export default memo(Routes)
