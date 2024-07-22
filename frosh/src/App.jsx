import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import './media.css'

import Navbar from './components/Navbar'
import OurTeam from './components/OurTeam'
import Map from './components/map'
import Faculty from './components/faculty'
import Team from './components/team'
import LogIn from './components/login'
import ScrollToTop from './components/scrollToTop';
import Navigate from './components/navigate';
import Navigation from './components/navigation';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />   
      <Navbar />

      <Routes>
        <Route exact path="/" element={<> <Map /> <OurTeam/>   </>} ></Route>
        <Route exact path="/faculty" element={<Faculty/>}></Route>
        <Route exact path="/team" element={<Team/>}></Route>
        <Route exact path="/login" element={<LogIn/>}></Route>
        <Route exact path = "/map" element={<> <Navbar /> <Navigate /></>}></Route>
        {/* <Route exact path="/map" render = {()=> { window.location.href = "./map.html" }} />   */}
      
      </Routes>
      
    </>
  )
}

export default App
