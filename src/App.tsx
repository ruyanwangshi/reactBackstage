import React from 'react';
import Routes from '@/routes'
import './App.css';
import NavBar from '@/components/navbar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;
