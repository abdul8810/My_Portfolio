import { useState } from 'react'
import Body from './Body'
import Navbar from './Navbar'
import About from './About'
import MyServices from './MyServices'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import Projects from './Projects'

function App() {
  return(
    <div>
    <Navbar/>
    <Body/>
    <About/>
    <MyServices/>
    <Projects/>
    <Contact/>
    <Footer/>
    <ScrollTop/>
</div>
  )
}

export default App
