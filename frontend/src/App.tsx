import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< LandingPage/>}></Route>


      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
