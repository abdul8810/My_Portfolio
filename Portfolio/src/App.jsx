import { useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'
import About from './About'
import MyServices from './MyServices'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

function App() {
  return(
    <div>
    <Navbar/>
    <Body/>
    <About/>
    <MyServices/>
    <Contact/>
    <Footer/>
    <ScrollTop/>
</div>
  )
}

export default App
