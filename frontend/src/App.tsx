import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Home } from './pages/user/Home'
import { DsaProblems } from './pages/user/Dsaproblems'
import { DsaProblem } from './pages/user/Dsaproblem'


function App() {
  const [count, setCount] = useState(0)

  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Landing/>}></Route>
        <Route path="/user/home" element={< Home/>}></Route>
        <Route path="/user/dsa/problems" element={<DsaProblems />}></Route>
        <Route path="/user/dsa/problem" element={<DsaProblem />}></Route>


      </Routes>
    </BrowserRouter>

    
  )
}

export default App
