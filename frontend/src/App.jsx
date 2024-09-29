import React, { useEffect, useState } from 'react'
import { Layout } from './components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Signup } from './pages'
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


  const [user, setUser] = useState(formatUser);

  useEffect(() => {

    RequestService.userDetails().then((data) => {
      data.success != false ? setUser(data.user) : setUser(null)
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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>

  )
}

export default App;

