import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.scss'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='*' element={<Home />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App