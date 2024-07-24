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
import Home from './components/Home'
import OurTeam from './components/OurTeam'
// import Sponsors from './components/sponsors'
import Map from './components/map'
import Faculty from './components/faculty'
import Team from './components/team'
import LogIn from './components/login'
import ScrollToTop from './components/scrollToTop';
import Navigate from './components/navigate';
import Nav from './components/Nav'
import Navigation from './components/navigation';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-body'>
      <ScrollToTop />   
      {/* <Navbar /> */}
      <Nav/>

      <Routes>
        <Route exact path="/" element={<> <Home/> <Map /> <OurTeam/>  </>} ></Route>
        <Route exact path="/faculty" element={<Faculty/>}></Route>
        <Route exact path="/team" element={<Team/>}></Route>
        <Route exact path="/login" element={<LogIn/>}></Route>
        <Route exact path = "/map" element={<> <Navbar /> <Navigate /></>}></Route>
        <Route exact path = "#map" element={<> <Map/></>}></Route>
        {/* <Route exact path="/map" render = {()=> { window.location.href = "./map.html" }} />   */}
      
      </Routes>
      
    </div>
  )
}

export default App
