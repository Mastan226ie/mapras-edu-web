import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonals from './Components/Testimonals/Testimonals'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlyr from './Components/VideoPlyr/VideoPlyr'


const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subtitle = 'Our Programs' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle = 'Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle = 'Testimonals' title='What Student Says'/>
        <Testimonals/>
        <Title subtitle = 'Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlyr playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App