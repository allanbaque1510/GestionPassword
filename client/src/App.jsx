import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Index from './Pages/Index'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registro' element={<Register/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App