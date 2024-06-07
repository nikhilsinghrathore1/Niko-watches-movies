import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Popular from './Pages/Popular'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
