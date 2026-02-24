import React from 'react'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Quiz from '../Pages/Quiz'
import Result from '../Pages/Result'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import AuthProvider from '../Authentication/AuthContext'
import PrivetRoute from './PrivetRoute'
import PublicRoute from './PublicRoute'

function MainRoutes() {
  return (
  <Router>
  <AuthProvider>
      <Layout>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
          <Route  path="/login" element={<PublicRoute><Login/></PublicRoute>} />
          <Route  path="/quiz" element={<PrivetRoute><Quiz/></PrivetRoute>} />
          <Route  path="/result" element={<Result/>} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  )
}

export default MainRoutes




