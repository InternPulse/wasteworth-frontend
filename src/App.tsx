import {Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layout/RootLayout'
import Login from './pages/authentication/Login'
import Signup from './pages/authentication/Signup'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<RootLayout />} >
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Signup />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
 