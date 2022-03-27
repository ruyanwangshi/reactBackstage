import Home from '@/view/home'
import Information from '@/view/Information'
import React, { memo } from 'react'
import { useRoutes, RouteObject, Navigate } from 'react-router-dom'

function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Navigate to="/home"/>,
    },
    {
      path: '/home',
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
