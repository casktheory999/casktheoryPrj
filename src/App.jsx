// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Illustrations from './pages/Illustrations'
import Bar from './pages/Bar'
import BarInnerPage from './pages/BarInnerPage.jsx'
import BarRoute from './pages/BarRoute'
import About from './pages/About'
import Member from './pages/member'

export default function App(){
  return(
    <div className='wrap'>
      <Navbar/>
      <div className='frist'>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/Illustrations' element={<Illustrations/>}></Route>
        <Route path='/Bar' element={<Bar/>}></Route>
        <Route path='/BarInnerPage' element={<BarInnerPage/>}></Route>
        <Route path='/BarRoute' element={<BarRoute/>}></Route>
        <Route path='/Member' element={<Member/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      <hr />
      </div>
      <Footer/>
    </div>
  )
}

