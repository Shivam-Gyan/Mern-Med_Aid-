import React, { useEffect, useState } from 'react'
import { Layout } from './components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home, AuthForm, Signup } from './pages'
import { toast, Toaster } from 'react-hot-toast'
import { createContext } from 'react'
import { RequestService } from './database/db.requests'

export const UserContext = createContext({})

const formatUser = {
  email: "",
  gender: "",
  name: "",
  phone: "",
  avatar: ""
}

const App = () => {

  const [user, setUser] = useState({email:null});

  useEffect(() => {

    RequestService.userDetails().then((data) => {
      data.success != false ? setUser(data.user) : setUser({email:null})
    }).catch(err => {
      console.log(err);
    })

  }, [])



  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Toaster />
        <Router>
          <Routes>
            <Route path={'/'} element={<Layout />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/signin' element={<AuthForm type={'sign-in'} />} />
            <Route path='/signup' element={<AuthForm type={'sign-up'} />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>

  )
}

export default App;

