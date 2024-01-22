import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </Box>
  )
}

export default App