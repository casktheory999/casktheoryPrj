import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop.jsx'
import Home from './pages/Home'
import News from './pages/News'
import Illustrations from './pages/Illustrations'
import SideTOC from './component/SideTOC.jsx';
import "./scss/side-toc.scss";
import Bar from './pages/Bar'
import BarInnerPage from './pages/BarInnerPage.jsx'
import BarRoute from './pages/BarRoute'
import About from './pages/About'
import Member from './pages/member'
import EventDetailPage from './pages/EventDetailPage.jsx'
import IllustrationsInnerPages from './pages/IllustrationsInnerPages.jsx'

export default function App(){
  return(
    <div className='wrap'>
      <ScrollToTop/>
      <Navbar/>
      <div className='frist'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path="/EventDetailPage" element={<EventDetailPage/>}></Route>
        <Route path='/Illustrations' element={<Illustrations/>}></Route>
        <Route path='/IllustrationsInnerPages' element={<IllustrationsInnerPages/>}></Route>
        <Route path='/Bar' element={<Bar/>}></Route>
        <Route path='/BarInnerPage' element={<BarInnerPage/>}></Route>
        <Route path='/BarRoute' element={<BarRoute/>}></Route>
        <Route path='/Member' element={<Member/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      </div>
      <Footer/>
      
    </div>
  )
}

