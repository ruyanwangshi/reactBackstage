import React, { useState, memo } from 'react'
import Routes from '@/routes'
import { AppContainer } from './common/app'
import NavBar from '@/components/navbar'
import MenuList from '@/components/menuList'

function App() {
  return (
    <AppContainer>
      <div className='menu-list'>
        <MenuList/>
      </div>
      <div className="app-container">
        <NavBar />
        <div className="right-content">
          <Routes />
        </div>
      </div>
    </AppContainer>
  )
}

export default memo(App)
