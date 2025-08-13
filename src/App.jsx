// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import Illustrations from './pages/Illustrations'
import Bar from './pages/Bar'
import Route2 from './pages/Route2'
import About from './pages/About'

export default function App(){
  return(
    <div className='wrap'>
      <Navbar/>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/Illustrations' element={<Illustrations/>}></Route>
        <Route path='/Bar' element={<Bar/>}></Route>
        <Route path='/Route2' element={<Route2/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

