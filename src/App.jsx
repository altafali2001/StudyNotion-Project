import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import PrivateRoute from './Components/PrivateRoute'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='w-screen h-screen bg-black flex flex-col '>
      <Navbar iseLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/dashboard' element={ <PrivateRoute><Dashboard  /></PrivateRoute> }/>
      </Routes>
    </div>
  )
}

export default App