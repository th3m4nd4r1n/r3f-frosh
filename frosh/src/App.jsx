
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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
import OurTeam from './components/OurTeam'
import Map from './components/map'
import Faculty from './components/faculty'
import Team from './components/team'







function Model0() {
  const gltf = useLoader(GLTFLoader, '../public/scene.gltf');
  const ref = useRef();
  useFrame((state, delta) => {
    var y = window.scrollY;
    
    ref.current.rotation.y=Math.PI;
    
    if (y == 0){
      ref.current.position.z=-1;
      ref.current.rotation.z=state.clock.elapsedTime;
      
    }
    else{
      ref.current.rotation.z=state.clock.elapsedTime;
      ref.current.position.x=10*Math.sin(y*0.0005);
      // ref.current.position.y=-y*0.0001;
      
    }
 
  });

  return <primitive object={gltf.scene} ref={ref} />;
}
const Compass = () =>{
  return(
    <Canvas>
    <ambientLight intensity={40} />
    <Model0 />
    <OrbitControls enablePan={false} enableZoom={false} enableDamping={true} enableRotate={true} enabled={true} />
    </Canvas>
)
}






function App() {
  return (
    <div className='elements'>  
  <Compass />
    <Navbar />
      <Routes>
        <Route exact path="/" element={<> <OurTeam/> </>} ></Route>
        <Route exact path="/faculty" element={<Faculty/>}></Route>
        <Route exact path="/team" element={<Team/>}></Route>
      </Routes>
      <Map />  
    </div>
  );
}

export default App