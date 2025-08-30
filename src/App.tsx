import React from 'react'
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainComponent from './Components/MainContent'
import MainContent from './Components/MainContent'
import ProductPage from './Components/ProductPage'
import TopSellers from './Components/TopSellers'
import PopularBlogs from './Components/PopularBlogs'

const App = () => {
  return (
    <Router>

      <div className='flex h-screen z-0'>
        <Sidebar/>
      </div>
      <div className="rounded w-full flex justify-between flex-wrap z-10 relative left-60 top-[-37rem]">
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>

        {/* <div>
          <TopSellers/>
          <PopularBlogs/>
        </div> */}
      </div>
    </Router>

    
  )
}

export default App