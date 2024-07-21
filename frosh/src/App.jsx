import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css'



function Model() {
  const gltf = useLoader(GLTFLoader, '../public/scene.gltf');
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y=Math.PI;
    ref.current.rotation.z=state.clock.elapsedTime;
    ref.current.position.z=-1;
 
  });

  return <primitive object={gltf.scene} ref={ref} />;
}
const Compass = () =>{
  return(
    <Canvas>
    <ambientLight intensity={40} />
    <Model />
    <OrbitControls enablePan={false} enableZoom={false} enableDamping={true} enableRotate={true} enabled={true} />
    </Canvas>
  )
}

function App() {
  return (
    <div className='elements'>

  <Compass />
  
  
  
    </div>


    

  );
}

export default App