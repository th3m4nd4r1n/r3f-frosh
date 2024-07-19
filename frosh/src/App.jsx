import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import OurTeam from './components/ourTeam'
import Map from './components/map'
import Faculty from './components/faculty'
import Team from './components/team'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<> <OurTeam/> </>} ></Route>
        <Route exact path="/faculty" element={<Faculty/>}></Route>
        <Route exact path="/team" element={<Team/>}></Route>
      </Routes>
      <Map />
    </>
  )
}

export default App
