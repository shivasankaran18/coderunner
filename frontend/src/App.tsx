import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Home } from './pages/user/Home'
import { DsaProblems } from './pages/user/Dsaproblems'
import { DsaProblem } from './pages/user/Dsaproblem'
import LearnPage from './pages/user/Learn'
import TopicsPage from './pages/user/Topics'
import SubTopicsPage from './pages/user/SubTopics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Landing/>}></Route>
        <Route path="/user/home" element={< Home/>}></Route>
        <Route path="/user/dsa/problems" element={<DsaProblems />}></Route>
        <Route path="/user/dsa/problem" element={<DsaProblem />}></Route>
        <Route path="/user/dsa/learn" element={<LearnPage/>}></Route>
        <Route path="/user/dsa/topics" element={<TopicsPage/>}></Route>
        <Route path="/user/dsa/subtopics" element={<SubTopicsPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
