import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Popular from './Pages/Popular'
import Movies from './Pages/Movies'
import Tv from './Pages/Tv'
import People from './Pages/People'
import MovieDetails from './Pages/MovieDetails'
import TvDetails from './Pages/TvDetails'
import PersonDetails from './Pages/PersonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/tvshows' element={<Tv/>}/>
        <Route path='/tv/:id' element={<TvDetails/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/people/:id' element={<PersonDetails/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
