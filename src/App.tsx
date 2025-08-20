import React from 'react'
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainComponent from './Components/MainContent'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <Router>

      <div className='flex h-screen z-0'>
        <Sidebar/>
      </div>
      <div className="rounded w-full flex justify-between flex-wrap z-10 relative left-60 top-[-37rem]">
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          
        </Routes>
      </div>
    </Router>
  )
}

export default App