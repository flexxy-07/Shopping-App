import React from 'react'
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainComponent from './Components/MainContent'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar/>
      </div>

      <div className="rounded w-full flex justify-between flex-wrap">
        <Routes>
          <Route path='/' element={<MainContent/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App